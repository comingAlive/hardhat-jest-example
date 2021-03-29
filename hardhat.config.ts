import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import {config as dotEnvConfig} from "dotenv";
import "hardhat-typechain";
import "hardhat-jest-plugin";
import {HardhatUserConfig} from "hardhat/types";


dotEnvConfig();

// TODO: reenable solidity-coverage when it works
// import "solidity-coverage";

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const RINKEBY_PRIVATE_KEY =
  process.env.RINKEBY_PRIVATE_KEY! ||
  "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"; // well known private key
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{version: "0.8.1", settings: {}}],
  },
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: ["e9794359a4ca9884168dea4b0a862208bda09e666ff8da9eefc1d341a4808d90"]
    },
    hardhat: {},
    localhost: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
