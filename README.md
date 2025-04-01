# XOPT Protocol

A decentralized protocol for cross-chain options trading and collateral vaults, built as a Substrate parachain on Kusama.

## Overview

XOPT enables seamless options trading across different blockchain networks while maintaining secure collateral management through cross-chain vaults. The protocol is designed to be scalable, secure, and user-friendly.

## Architecture

- **Chain**: Substrate parachain with custom runtime
- **Frontend**: Next.js dApp with shadcn/ui components
- **Crowdloan Portal**: Dedicated UI for Kusama parachain auction
- **Indexing**: SubQuery for event indexing and data querying

## Getting Started

### Prerequisites

- Rust and Cargo
- Node.js 18+
- Docker and Docker Compose
- Polkadot.js Extension

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/ArsCodeAmatoria/xopt.git
cd xopt
```

2. Build the chain:
```bash
cd chain
cargo build --release
```

3. Start the frontend development server:
```bash
cd frontend
npm install
npm run dev
```

4. Start the crowdloan portal:
```bash
cd crowdloan-ui
npm install
npm run dev
```

### Testing

```bash
# Run chain tests
cd chain
cargo test

# Run frontend tests
cd frontend
npm test

# Run crowdloan portal tests
cd crowdloan-ui
npm test
```

## Project Structure

```
xopt/
├── chain/                # Substrate parachain node
├── frontend/            # Options trading dApp
├── crowdloan-ui/        # Crowdloan contribution portal
├── subquery/            # Event indexing
└── docs/                # Documentation
```

## Documentation

- [Whitepaper](docs/whitepaper.md)
- [Architecture](docs/architecture.md)
- [Governance](docs/governance.md)

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 