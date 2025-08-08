import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useEffect, useState } from "react"

export default function ShowBalance(){
    const [ balance , setBalance ] = useState<number | null>()
    const wallet = useWallet()
    const { connection } = useConnection()

    async function showBalance (){
        const pubKey= wallet.publicKey
        const bal =  await connection.getBalance(pubKey!)
        setBalance(bal/LAMPORTS_PER_SOL)
        
    }

    useEffect(()=>{
      showBalance()
    },[wallet])

    return <div>
        sol : {balance}
    </div>
}