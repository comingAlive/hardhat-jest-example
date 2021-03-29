# Typescript Solidity Dev Starter Kit

_Updated to use Hardhat+Jest._

This is a starter kit for developing, testing, and deploying smart contracts with a full Typescript environment. This stack uses [Hardhat](https://hardhat.org) as the platform layer to orchestrate all the tasks. [Ethers](https://docs.ethers.io/ethers.js/html/index.html) is used for all Ethereum interactions and testing.

## Using this Project

Clone this repository, then install the dependencies with `npm install`. Build everything with `npm run build`. https://hardhat.org has excellent docs, and can be used as reference for extending this project.

## Available Functionality

### Build Contracts and Generate Typechain Typings

`npm run compile`

### Run Contract Tests & Get Callstacks

In one terminal run `npx hardhat node`

Then in another run `npm run test`

### Run Contract Tests and Generate Gas Usage Report

In one terminal run `npx buidler node`

Then in another run `npm run test -- --network localhost`

Notes:

- When running with this `localhost` option, you get a gas report but may not get good callstacks
- See [here](https://github.com/cgewecke/eth-gas-reporter#installation-and-config) for how to configure the gas usage report.

### Run Coverage Report for Tests (doesn't work)

`npm run coverage`

### Deploy to Ethereum

Create/modify network config in `hardhat.config.ts` and add API key and private key, then run:

`npx hardhat run --network rinkeby scripts/deploy.txt`

### Verify on Etherscan

Add Etherscan API key to `hardhat.config.ts`, then run:

`npx hardhat verify-contract --contract-name Counter --address <DEPLOYED ADDRESS>`