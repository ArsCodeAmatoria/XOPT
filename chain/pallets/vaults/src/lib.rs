#![cfg_attr(not(feature = "std"), no_std)]

use frame_support::{
    dispatch::DispatchResult,
    pallet_prelude::*,
    traits::Currency,
};
use frame_system::pallet_prelude::*;
use sp_std::prelude::*;

pub use pallet::*;

#[frame_support::pallet]
pub mod pallet {
    use super::*;

    #[pallet::pallet]
    #[pallet::generate_store(pub(super) trait Store)]
    pub struct Pallet<T>(_);

    #[pallet::config]
    pub trait Config: frame_system::Config {
        type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;
        type Currency: Currency<Self::AccountId>;
    }

    #[pallet::event]
    #[pallet::generate_deposit(pub(super) fn deposit_event)]
    pub enum Event<T: Config> {
        VaultCreated {
            vault_id: u64,
            owner: T::AccountId,
            collateral: u128,
        },
        VaultClosed {
            vault_id: u64,
            owner: T::AccountId,
        },
        CollateralAdded {
            vault_id: u64,
            amount: u128,
        },
        CollateralRemoved {
            vault_id: u64,
            amount: u128,
        },
    }

    #[pallet::error]
    pub enum Error<T> {
        VaultNotFound,
        InsufficientCollateral,
        VaultAlreadyExists,
        InvalidAmount,
    }

    #[pallet::storage]
    #[pallet::getter(fn next_vault_id)]
    pub type NextVaultId<T: Config> = StorageValue<_, u64, ValueQuery>;

    #[pallet::storage]
    #[pallet::getter(fn vaults)]
    pub type Vaults<T: Config> = StorageMap<
        _,
        Blake2_128Concat,
        u64,
        VaultDetails<T::AccountId>,
        OptionQuery,
    >;

    #[derive(Encode, Decode, Clone, RuntimeDebug, PartialEq, Eq)]
    pub struct VaultDetails<AccountId> {
        pub owner: AccountId,
        pub collateral: u128,
        pub active: bool,
    }

    #[pallet::call]
    impl<T: Config> Pallet<T> {
        #[pallet::weight(10_000)]
        pub fn create_vault(
            origin: OriginFor<T>,
            collateral: u128,
        ) -> DispatchResult {
            let owner = ensure_signed(origin)?;

            ensure!(collateral > 0, Error::<T>::InvalidAmount);

            let vault_id = NextVaultId::<T>::get();
            NextVaultId::<T>::put(vault_id + 1);

            let vault = VaultDetails {
                owner: owner.clone(),
                collateral,
                active: true,
            };

            Vaults::<T>::insert(vault_id, vault);

            Self::deposit_event(Event::VaultCreated {
                vault_id,
                owner,
                collateral,
            });

            Ok(())
        }

        #[pallet::weight(10_000)]
        pub fn close_vault(
            origin: OriginFor<T>,
            vault_id: u64,
        ) -> DispatchResult {
            let owner = ensure_signed(origin)?;

            let mut vault = Vaults::<T>::get(vault_id).ok_or(Error::<T>::VaultNotFound)?;
            ensure!(vault.owner == owner, Error::<T>::VaultNotFound);
            ensure!(vault.active, Error::<T>::VaultNotFound);

            vault.active = false;
            Vaults::<T>::insert(vault_id, vault);

            Self::deposit_event(Event::VaultClosed {
                vault_id,
                owner,
            });

            Ok(())
        }

        #[pallet::weight(10_000)]
        pub fn add_collateral(
            origin: OriginFor<T>,
            vault_id: u64,
            amount: u128,
        ) -> DispatchResult {
            let owner = ensure_signed(origin)?;

            ensure!(amount > 0, Error::<T>::InvalidAmount);

            let mut vault = Vaults::<T>::get(vault_id).ok_or(Error::<T>::VaultNotFound)?;
            ensure!(vault.owner == owner, Error::<T>::VaultNotFound);
            ensure!(vault.active, Error::<T>::VaultNotFound);

            vault.collateral += amount;
            Vaults::<T>::insert(vault_id, vault);

            Self::deposit_event(Event::CollateralAdded {
                vault_id,
                amount,
            });

            Ok(())
        }

        #[pallet::weight(10_000)]
        pub fn remove_collateral(
            origin: OriginFor<T>,
            vault_id: u64,
            amount: u128,
        ) -> DispatchResult {
            let owner = ensure_signed(origin)?;

            ensure!(amount > 0, Error::<T>::InvalidAmount);

            let mut vault = Vaults::<T>::get(vault_id).ok_or(Error::<T>::VaultNotFound)?;
            ensure!(vault.owner == owner, Error::<T>::VaultNotFound);
            ensure!(vault.active, Error::<T>::VaultNotFound);
            ensure!(vault.collateral >= amount, Error::<T>::InsufficientCollateral);

            vault.collateral -= amount;
            Vaults::<T>::insert(vault_id, vault);

            Self::deposit_event(Event::CollateralRemoved {
                vault_id,
                amount,
            });

            Ok(())
        }
    }
} 