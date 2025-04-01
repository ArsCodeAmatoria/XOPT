#![cfg_attr(not(feature = "std"), no_std)]

use frame_support::{
    dispatch::DispatchResult,
    pallet_prelude::*,
    traits::Currency,
};
use frame_system::pallet_prelude::*;
use sp_std::prelude::*;
use pallet_oracle::Pallet as Oracle;

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
        OptionCreated {
            option_id: u64,
            underlying: Vec<u8>,
            strike_price: u128,
            expiry: T::BlockNumber,
            is_call: bool,
        },
        OptionExercised {
            option_id: u64,
            exerciser: T::AccountId,
        },
        OptionExpired {
            option_id: u64,
        },
    }

    #[pallet::error]
    pub enum Error<T> {
        InvalidStrikePrice,
        InvalidExpiry,
        OptionNotFound,
        OptionExpired,
        InsufficientFunds,
    }

    #[pallet::storage]
    #[pallet::getter(fn next_option_id)]
    pub type NextOptionId<T: Config> = StorageValue<_, u64, ValueQuery>;

    #[pallet::storage]
    #[pallet::getter(fn options)]
    pub type Options<T: Config> = StorageMap<
        _,
        Blake2_128Concat,
        u64,
        OptionDetails<T::AccountId, T::BlockNumber>,
        OptionQuery,
    >;

    #[derive(Encode, Decode, Clone, RuntimeDebug, PartialEq, Eq)]
    pub struct OptionDetails<AccountId, BlockNumber> {
        pub creator: AccountId,
        pub underlying: Vec<u8>,
        pub strike_price: u128,
        pub expiry: BlockNumber,
        pub is_call: bool,
        pub exercised: bool,
    }

    #[pallet::call]
    impl<T: Config> Pallet<T> {
        #[pallet::weight(10_000)]
        pub fn create_option(
            origin: OriginFor<T>,
            underlying: Vec<u8>,
            strike_price: u128,
            expiry: T::BlockNumber,
            is_call: bool,
        ) -> DispatchResult {
            let creator = ensure_signed(origin)?;

            ensure!(strike_price > 0, Error::<T>::InvalidStrikePrice);
            ensure!(expiry > frame_system::Pallet::<T>::block_number(), Error::<T>::InvalidExpiry);

            let option_id = NextOptionId::<T>::get();
            NextOptionId::<T>::put(option_id + 1);

            let option = OptionDetails {
                creator: creator.clone(),
                underlying,
                strike_price,
                expiry,
                is_call,
                exercised: false,
            };

            Options::<T>::insert(option_id, option);

            Self::deposit_event(Event::OptionCreated {
                option_id,
                underlying,
                strike_price,
                expiry,
                is_call,
            });

            Ok(())
        }

        #[pallet::weight(10_000)]
        pub fn exercise_option(origin: OriginFor<T>, option_id: u64) -> DispatchResult {
            let exerciser = ensure_signed(origin)?;

            let mut option = Options::<T>::get(option_id).ok_or(Error::<T>::OptionNotFound)?;
            ensure!(!option.exercised, Error::<T>::OptionExpired);
            ensure!(
                frame_system::Pallet::<T>::block_number() <= option.expiry,
                Error::<T>::OptionExpired
            );

            let current_price = Oracle::<T>::get_price(&option.underlying)
                .ok_or(Error::<T>::OptionNotFound)?;

            let is_profitable = if option.is_call {
                current_price > option.strike_price
            } else {
                current_price < option.strike_price
            };

            if is_profitable {
                // Transfer premium from exerciser to creator
                let premium = option.strike_price;
                T::Currency::transfer(&exerciser, &option.creator, premium, ExistenceRequirement::KeepAlive)?;
            }

            option.exercised = true;
            Options::<T>::insert(option_id, option);

            Self::deposit_event(Event::OptionExercised {
                option_id,
                exerciser,
            });

            Ok(())
        }
    }
} 