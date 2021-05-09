import {ethers} from "hardhat";

async function main() {
  const LotteryFactory = await ethers.getContractFactory("Lottery");

  // If we had constructor arguments, they would be passed into deploy()
  let lottery = await LotteryFactory.deploy();

  // The address the Contract WILL have once mined
  console.log(lottery.address);

  // The transaction that was sent to the network to deploy the Contract
  console.log(lottery.deployTransaction.hash);

  // The lottery is NOT deployed yet; we must wait until it is mined
  await lottery.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
