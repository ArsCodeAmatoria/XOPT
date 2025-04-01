use sc_cli::Result;
use sc_service::{Configuration, ServiceBuilder};
use sp_runtime::traits::{Block as BlockT, Header as HeaderT};

pub struct Node;

impl Node {
    pub fn new() -> Self {
        Self
    }

    pub fn run(&self, config: Configuration) -> Result<()> {
        let service = ServiceBuilder::new(config).build()?;
        service.run()
    }
} 