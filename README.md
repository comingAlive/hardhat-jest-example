# Hardhat TypeScript Jest Dev Starter Kit

Mocha and Chai instead of Jest: https://github.com/rhlsthrm/typescript-solidity-dev-starter-kit

Consists of:
1. [Hardhat](https://hardhat.org) - Ethereum development environment.
2. [Ethers](https://github.com/ethers-io/ethers.js/) - Ethereum interactions and utilities.
3. [TypeChain](https://github.com/ethereum-ts/TypeChain) - TypeScript typings generator.
4. [Jest](https://github.com/facebook/jest) - testing framework.
5. [Waffle](https://github.com/EthWorks/Waffle) - testing matchers.

## How to use

Clone repo and install dependencies:

```bash
git clone https://github.com/comingAlive/hardhat-jest-example.git
cd hardhat-jest-example

npm install
# or
yarn
```
## Available Functionality

### Build Contracts and Generate Typechain Typings

`yarn compile`

### Run Contract Tests.

`jest`

### Start a local node.

`hardhat node`

### Run Contract Test on the local network.

`yarn test -- --network localhost`

### Deploy to Ethereum

Create/modify network config in `hardhat.config.ts` and add API key and private key, then run:

`hardhat run --network rinkeby scripts/deploy.ts`

### Verify on Etherscan

Add Etherscan API key to `hardhat.config.ts`, then run:

`hardhat verify-contract --contract-name Counter --address <DEPLOYED ADDRESS>`