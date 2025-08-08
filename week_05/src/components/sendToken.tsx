import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import { useRef } from "react"


export default function SendSolana(){
    const wallet = useWallet()
    const { connection } = useConnection()
    const pubRef = useRef<HTMLInputElement | null >(null)
    const solRef = useRef<HTMLInputElement | null>(null)
    
    async function sendSol(){
        const publicKey = pubRef.current?.value
        const solana :any= solRef.current?.value

        const transaction = new Transaction()
        if(!wallet.publicKey){
            alert("wallet is not connected")
            return 
        }
        transaction.add(SystemProgram.transfer({
            fromPubkey : wallet.publicKey,
            toPubkey : new PublicKey(publicKey!),
            lamports : solana * LAMPORTS_PER_SOL
        }))

        await wallet.sendTransaction(transaction,connection)
        alert("successfull")
    }

    return <div>
        <input type="text" ref={pubRef} placeholder="enter public key " />
        <input type="text" ref={solRef} placeholder="enter solana " />
        <button onClick={sendSol}>send sol</button>
    </div>
}