# Typescript Solidity Dev Starter Kit

_Forked and Updated to use Jest instead of Mocha and Chai._

Original repo: https://github.com/rhlsthrm/typescript-solidity-dev-starter-kit

This is a starter kit for developing, testing, and deploying smart contracts with a full Typescript environment. This
stack uses [Hardhat](https://hardhat.org) as the platform layer to orchestrate all the
tasks. [Ethers](https://docs.ethers.io/ethers.js/html/index.html) is used for all Ethereum interactions and testing.

## Using this Project

Clone this repository, then install the dependencies with `npm install`. Build everything with `npm run build`
. https://hardhat.org has excellent docs, and can be used as reference for extending this project.

## Available Functionality

### Build Contracts and Generate Typechain Typings

`npm run compile`

### Run Contract Tests.

`jest`

### Deploy to Ethereum

Create/modify network config in `hardhat.config.ts` and add API key and private key, then run:

`npx hardhat run --network rinkeby scripts/deploy.txt`

### Verify on Etherscan

Add Etherscan API key to `hardhat.config.ts`, then run:

`npx hardhat verify-contract --contract-name Counter --address <DEPLOYED ADDRESS>`