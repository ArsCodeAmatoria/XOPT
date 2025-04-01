use sp_runtime::{
    create_runtime_str, generic, impl_opaque_keys,
    traits::{AccountIdLookup, BlakeTwo256, Block as BlockT},
    transaction_validity::{TransactionSource, TransactionValidity},
    ApplyExtrinsicResult, MultiSignature,
};

pub use sp_runtime::OpaqueExtrinsic as UncheckedExtrinsic;

pub const VERSION: RuntimeVersion = RuntimeVersion {
    spec_name: create_runtime_str!("xopt"),
    impl_name: create_runtime_str!("xopt"),
    authoring_version: 1,
    spec_version: 1,
    impl_version: 1,
    apis: RUNTIME_API_VERSIONS,
    transaction_version: 1,
    state_version: 0,
};

pub type BlockNumber = u32;
pub type Signature = MultiSignature;
pub type AccountId = <<Signature as Verify>::Signer as IdentifyAccount>::AccountId;
pub type Header = generic::Header<BlockNumber, BlakeTwo256>;
pub type Block = generic::Block<Header, UncheckedExtrinsic>;
pub type Hash = sp_core::H256;

impl_opaque_keys! {
    pub struct SessionKeys {
        pub aura: Aura,
        pub grandpa: Grandpa,
    }
}

pub struct Runtime;

impl Runtime {
    pub fn new() -> Self {
        Self
    }
} 