const hre = require("hardhat");

async function main() {
  // Compile the contract
  await hre.run("compile");

  // Deploy the OpenThought contract
  const OpenThought = await hre.ethers.getContractFactory("OpenThought");
  const openThought = await OpenThought.deploy();

  await openThought.waitForDeployment();

  console.log("Contract deployed to:", await openThought.getAddress());
}

// Run the script
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
