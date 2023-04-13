require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


module.exports = {
  solidity: "0.8.9",
    networks: {
    sepolia: {
      url: 'https://yolo-hardworking-road.ethereum-sepolia.discover.quiknode.pro/6957b92a766e0beaa2fe00bdc9a6475189f1a85b/',
      accounts: ['8b9f975b3a486bcce0980fac2e20607690fe5c238f5440b4b31ae738f4eec02d']
    }
  },
};

