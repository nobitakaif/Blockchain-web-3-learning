import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop(){

    const wallet = useWallet()
    const { connection } = useConnection()

    async function sendAirdrop(){
        alert("button clicked")
        await connection.requestAirdrop(wallet?.publicKey!, 1000000000 )
        alert("request send")

    }
    return <div>
        <h3>Public Key : {wallet.publicKey?.toString()}</h3>
        <input placeholder="amount"/>
        <button onClick={sendAirdrop}> send Airdrop</button> 
    </div>
}