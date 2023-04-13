require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


module.exports = {
  solidity: "0.8.9",
    networks: {
    sepolia: {
      url: 'https://sepolia.infura.io/v3/c033f98fb0a34caaada804ddd89fa67d',
      accounts: ['8b9f975b3a486bcce0980fac2e20607690fe5c238f5440b4b31ae738f4eec02d']
    }
  },
};

