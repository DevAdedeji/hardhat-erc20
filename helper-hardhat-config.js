const { ethers } = require("hardhat")



const developmentChains = ["hardhat", "localhost"]

const INITIAL_SUPPLY = 200000000000

module.exports = {
    developmentChains,
    INITIAL_SUPPLY,
}