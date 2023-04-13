
const {ethers} = require("hardhat");

async function main() {
  const contractInstance = await ethers.getContractFactory("NFTDapp");
  const contractDeploy = await contractInstance.deploy('https://nft-collection-sneh1999.vercel.app/api/','0x3bda66EC8d0C60a07E4209c05f697c011fA8F893');
  await contractDeploy.deployed();

  console.log('Address is:'+ contractDeploy.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
