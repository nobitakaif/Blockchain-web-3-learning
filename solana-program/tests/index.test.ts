
import { expect, test } from "bun:test"
import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"

let countrAccountKeypair  = Keypair.generate(); // for store the data on the blockchain
let adminKeypair  = Keypair.generate(); // for admin or user wallet 

test("program initializing",async ()=>{
    const connection = new Connection("http://localhost:8899") // connecting to the custom rpc url i.e running on the our terminal
    const  data = await  connection.getAccountInfo(adminKeypair.publicKey) // it will return null because this account does not hold any sol 
    // requesting to airdrop to this account

    const txn = await connection.requestAirdrop(adminKeypair.publicKey, 5 * LAMPORTS_PER_SOL)
    await connection.confirmTransaction(txn)
    const balance = await connection.getBalance(adminKeypair.publicKey)
    console.log(balance)
    // expect(balance).toBe(5*)
})