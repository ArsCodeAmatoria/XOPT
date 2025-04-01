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
        TokensMinted {
            account: T::AccountId,
            amount: u128,
        },
        TokensBurned {
            account: T::AccountId,
            amount: u128,
        },
        TokensTransferred {
            from: T::AccountId,
            to: T::AccountId,
            amount: u128,
        },
    }

    #[pallet::error]
    pub enum Error<T> {
        InsufficientBalance,
        InvalidAmount,
    }

    #[pallet::storage]
    #[pallet::getter(fn total_supply)]
    pub type TotalSupply<T: Config> = StorageValue<_, u128, ValueQuery>;

    #[pallet::call]
    impl<T: Config> Pallet<T> {
        #[pallet::weight(10_000)]
        pub fn mint(
            origin: OriginFor<T>,
            account: T::AccountId,
            amount: u128,
        ) -> DispatchResult {
            ensure_root(origin)?;

            ensure!(amount > 0, Error::<T>::InvalidAmount);

            let current_supply = TotalSupply::<T>::get();
            TotalSupply::<T>::put(current_supply + amount);

            T::Currency::deposit_creating(&account, amount);

            Self::deposit_event(Event::TokensMinted {
                account,
                amount,
            });

            Ok(())
        }

        #[pallet::weight(10_000)]
        pub fn burn(
            origin: OriginFor<T>,
            amount: u128,
        ) -> DispatchResult {
            let account = ensure_signed(origin)?;

            ensure!(amount > 0, Error::<T>::InvalidAmount);
            ensure!(T::Currency::can_slash(&account, amount), Error::<T>::InsufficientBalance);

            let current_supply = TotalSupply::<T>::get();
            TotalSupply::<T>::put(current_supply - amount);

            T::Currency::slash(&account, amount);

            Self::deposit_event(Event::TokensBurned {
                account,
                amount,
            });

            Ok(())
        }

        #[pallet::weight(10_000)]
        pub fn transfer(
            origin: OriginFor<T>,
            to: T::AccountId,
            amount: u128,
        ) -> DispatchResult {
            let from = ensure_signed(origin)?;

            ensure!(amount > 0, Error::<T>::InvalidAmount);
            ensure!(T::Currency::can_slash(&from, amount), Error::<T>::InsufficientBalance);

            T::Currency::transfer(&from, &to, amount, ExistenceRequirement::KeepAlive)?;

            Self::deposit_event(Event::TokensTransferred {
                from,
                to,
                amount,
            });

            Ok(())
        }
    }
} 