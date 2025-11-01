import { Connection, Keypair, LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js";

const payer = Keypair.fromSecretKey(Uint8Array.from([191,156,12,131,125,220,143,133,179,205,33,35,120,197,240,19,45,12,61,34,61,188,56,145,5,249,198,141,240,140,96,141,220,10,202,127,202,220,121,15,91,222,32,112,123,63,71,116,92,218,92,56,69,230,178,46,254,69,52,109,254,22,98,128]))

const connection = new Connection("https://api.devnet.solana.com")
// creating normal account just like phantom create 
async function main(){
    const newAccount = Keypair.generate()
    const transction = new Transaction()

    transction.add(SystemProgram.transfer({
        fromPubkey : payer.publicKey,
        toPubkey : newAccount.publicKey,
        lamports : 1 * LAMPORTS_PER_SOL
    }))
    await connection.sendTransaction(transction,[payer]) 
    console.log(newAccount.publicKey.toBase58())
}

// main()

async function accountWithData(){
    const newAccount = Keypair.generate() // creating new account
    const Total_Bytes = 165 // how much bytes i want to store in solana
    const lamports = await connection.getMinimumBalanceForRentExemption(Total_Bytes) // it will tell how much solana it need to store this much data because whenever we store data on solana we need to pay some sol
    
    const transction = new Transaction()
    transction.add(
        SystemProgram.createAccount({
            fromPubkey : payer.publicKey,
            newAccountPubkey : newAccount.publicKey,
            lamports : lamports,
            space : Total_Bytes,
            programId : SystemProgram.programId
        })
    )
    await connection.sendTransaction(transction, [payer, newAccount])
    console.log("new Account with data : " , newAccount.publicKey.toBase58())
}
accountWithData()