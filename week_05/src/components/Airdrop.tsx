import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useRef } from "react"

export function Airdrop(){

    const wallet = useWallet()
    const { connection } = useConnection()
    const amountRef = useRef<HTMLInputElement>(null)

    async function sendAirdrop(){
        
        const amount:any= amountRef.current?.value 
        
        await connection.requestAirdrop(wallet?.publicKey!, (amount * LAMPORTS_PER_SOL)  )
        alert("request send")

    }
    return <div>
        <h3>Public Key : {wallet.publicKey?.toString()}</h3>
        <input placeholder="amount" ref={amountRef} type="text"/>
        <button onClick={sendAirdrop}> send Airdrop</button> 
    </div>
}