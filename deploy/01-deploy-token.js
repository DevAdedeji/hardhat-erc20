const {network } = require("hardhat")
const {INITIAL_SUPPLY, developmentChains} = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
require("dotenv").config()

module.exports = async({ getNamedAccounts, deployments })=>{
    const {deploy, log} = deployments
    const { deployer } = await getNamedAccounts()
    let args = [INITIAL_SUPPLY]
    const token = await deploy("OurToken", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 6
    })
    const address = token.address
    log(`ourToken deployed at ${address}`)
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("Verifying.....")
        await verify(address, args)
    }
}

module.exports.tags = ["all", "token"]