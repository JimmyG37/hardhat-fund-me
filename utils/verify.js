const { run } = require("hardhat")

const verify = async (contractAddrress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddrress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Contract already verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
