import express from "express";
import { HDNodeWallet,Wallet} from "ethers"
import pg from "pg"
import { mnemonicToSeedSync,validateMnemonic} from "bip39"
import { MNEUMONIC } from "./config";

const seed = mnemonicToSeedSync(MNEUMONIC)
const app = express()

app.post("/signup",(req,res)=>{
    const userId = 1;
    const hdNode = HDNodeWallet.fromSeed(seed)
    const child = hdNode.derivePath(`m/44'/60'/${userId}'/0`)
    res.status(200).json({
        msg : child.privateKey
    })
})