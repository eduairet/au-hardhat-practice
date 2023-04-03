const ethers = require('hardhat').ethers;

async function main() {
    const Ownership = await ethers.getContractFactory('Ownership');
    // Deploy the contract
    const ownership = await Ownership.deploy();
    // Wait for the contract to be deployed
    await ownership.deployed();
    // Check the deployment address
    console.log(`Ownership deployed to ${ownership.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
