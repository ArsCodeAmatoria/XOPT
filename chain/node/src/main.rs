use sc_cli::Result;
use sc_service::{Configuration, ServiceBuilder};
use sp_runtime::traits::{Block as BlockT, Header as HeaderT};

fn main() -> Result<()> {
    let config = Configuration::from_cli()?;
    let node = Node::new();
    node.run(config)
}

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