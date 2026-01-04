import {JsonRpcProvider, id, ethers} from "ethers"

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/doa_20ngGidfEAHk2U0gBAEcICOg7c0e") 

// this will poll everytime on the blockchain wheneve any even happen on the spicific address like here for USDT 
// address -> 0xdac17f958d2ee523a2206206994597c13d831ec7
async function pollBlock(blockNumber : number){
    const logs = await provider.getLogs({
        address : "0xdac17f958d2ee523a2206206994597c13d831ec7",
        fromBlock : blockNumber,
        toBlock : blockNumber,
        topics : [id("Transfer(address,address,uint256)")] // id will convert 5 bits into hex and rest of args just like in postman we do, topic mean in which event or emit you want to logs, in this case whenever any transfer happen on the USDT with the blockNumber then it will executed
    })
    return logs
}

// this getBlockNumber gives you latest block number 
provider.getBlockNumber().then(r =>{
    console.log(`you current block ${r}`)
    pollBlock(r).then(res =>{
        console.log(res)
    }).catch(e =>{
        console.log("not able to get log the emit")
    })
}).catch(e =>{
    console.log("not able to get latest block")
})
// pollBlock(24163922).then(r =>{
//     console.log(r)
// })