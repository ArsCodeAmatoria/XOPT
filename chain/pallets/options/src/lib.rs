use frame_support::{
    decl_error, decl_event, decl_module, decl_storage, dispatch::DispatchResult,
    ensure, traits::Get,
};
use frame_system::ensure_signed;
use sp_runtime::traits::AccountIdConversion;

pub trait Config: frame_system::Config {
    type Event: From<Event<Self>> + Into<<Self as frame_system::Config>::Event>;
}

decl_storage! {
    trait Store for Module<T: Config> as Options {
        pub OptionCount get(fn option_count): u64;
    }
}

decl_event!(
    pub enum Event<T> where AccountId = <T as frame_system::Config>::AccountId {
        OptionCreated(AccountId, u64),
    }
);

decl_error! {
    pub enum Error for Module<T: Config> {
        InvalidOption,
    }
}

decl_module! {
    pub struct Module<T: Config> for enum Call where origin: T::Origin {
        fn deposit_event() = default;

        #[weight = 10_000]
        pub fn create_option(origin) -> DispatchResult {
            let who = ensure_signed(origin)?;
            let option_id = Self::option_count();
            
            <OptionCount<T>>::put(option_id + 1);
            
            Self::deposit_event(RawEvent::OptionCreated(who, option_id));
            
            Ok(())
        }
    }
} 