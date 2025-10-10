import * as borsh from "borsh"
import { expect, test } from "bun:test"
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import { COUNTER_SIZE, schema } from "./types/types";

let countrAccountKeypair  = Keypair.generate(); // for store the data on the blockchain
let adminKeypair  = Keypair.generate(); // for admin or user wallet 

const programId= new PublicKey("GdoFqYrwWWuHghoi1VX5JHWiBBheps3mnoSYM5oVNYRS")
// console.log("GdoFqYrwWWuHghoi1VX5JHWiBBheps3mnoSYM5oVNYRS")

test("program initializing",async ()=>{
    const connection = new Connection("http://localhost:8899") // connecting to the custom rpc url i.e running on the our terminal
    const  data = await  connection.getAccountInfo(adminKeypair.publicKey) // it will return null because this account does not hold any sol 
    // requesting to airdrop to this account

    const txn = await connection.requestAirdrop(adminKeypair.publicKey, 5 * LAMPORTS_PER_SOL)
    await connection.confirmTransaction(txn)
    const balance = await connection.getBalance(adminKeypair.publicKey)
    console.log(balance)


    const minimumAmount = await connection.getMinimumBalanceForRentExemption(COUNTER_SIZE) // checking how much solana need to be hold in this account to store the data(bytes) on the blockchain 
    console.log("minimum ammount", minimumAmount / LAMPORTS_PER_SOL )
    // expect(balance).toBe(5*)

    const instruction = SystemProgram.createAccount({
        fromPubkey : adminKeypair.publicKey,
        lamports : minimumAmount,
        space : COUNTER_SIZE,
        programId : programId,
        newAccountPubkey : countrAccountKeypair.publicKey
    })

    const createAccountTxn = new Transaction()
    createAccountTxn.add(instruction);
    const signature = await connection.sendTransaction(createAccountTxn, [adminKeypair, countrAccountKeypair])
    await connection.confirmTransaction(signature)
    console.log(countrAccountKeypair.publicKey.toBase58())

    const  dataAccountInfo = await  connection.getAccountInfo(countrAccountKeypair.publicKey)
    const count =  borsh.deserialize(schema, dataAccountInfo?.data!)
    console.log(count)
})