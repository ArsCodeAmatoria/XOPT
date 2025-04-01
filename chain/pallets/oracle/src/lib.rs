#![cfg_attr(not(feature = "std"), no_std)]

use frame_support::{
    decl_module, decl_storage, decl_event, decl_error, dispatch,
    traits::Get,
};
use frame_system::ensure_signed;
use sp_std::vec::Vec;

pub trait Config: frame_system::Config {
    type Event: From<Event<Self>> + Into<<Self as frame_system::Config>::Event>;
}

decl_storage! {
    trait Store for Module<T: Config> as Oracle {
        pub Price get(fn price): u64;
    }
}

decl_event!(
    pub enum Event<T> where
        <T as frame_system::Config>::AccountId,
    {
        PriceUpdated(u64),
    }
);

decl_error! {
    pub enum Error for Module<T: Config> {
        InvalidPrice,
    }
}

decl_module! {
    pub struct Module<T: Config> for enum Call where origin: T::Origin {
        type Error = Error<T>;

        fn deposit_event() = default;

        #[weight = 10_000]
        pub fn update_price(origin, new_price: u64) -> dispatch::DispatchResult {
            let _ = ensure_signed(origin)?;
            
            if new_price == 0 {
                return Err(Error::<T>::InvalidPrice.into());
            }

            Price::put(new_price);
            Self::deposit_event(Event::PriceUpdated(new_price));
            
            Ok(())
        }
    }
} 