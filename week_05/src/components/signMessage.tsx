import { useWallet } from "@solana/wallet-adapter-react"
import { ed25519 } from "@noble/curves/ed25519"
import  bs58  from "bs58"
import {  useRef } from "react"


export default function SignMessage(){
    const { publicKey , signMessage} = useWallet()
    const messageRef = useRef<HTMLInputElement | null >(null)


    async function signingMessage(){
        if(!publicKey)return 
        if(!signMessage)return 

        const message = messageRef.current?.value 
        // converting normal text into bytes
        const messageEncode = new TextEncoder().encode(message)
        // signing the mssage 
        const signature = await signMessage(messageEncode)
        // verfying the signature 
        if(!ed25519.verify(signature,messageEncode,publicKey.toBytes())){
            alert("invalid signature")
            throw new Error("invalid signature")
        } 
        alert(`success ${bs58.encode(signature)}`)
        console.log(bs58.encode(signature))

    }
    return <div>
        <input type="text"  ref={messageRef}/>
        <button onClick={signingMessage}>sign message</button>
    </div>
}