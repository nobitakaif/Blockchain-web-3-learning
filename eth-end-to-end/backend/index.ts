import express from "express";
import { HDNodeWallet} from "ethers"
import pg, { Client } from "pg"
import { mnemonicToSeedSync} from "bip39"
import { MNEUMONIC } from "./config";

const seed = mnemonicToSeedSync(MNEUMONIC)
const app = express()
app.use(express.json())
const client = new Client("postgres://postgres:mypassword@localhost:5432/eth")
client.connect()

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    const result =await client.query("INSERT INTO userBinance (username, password, depositeAddress, privateKey, balance) VALUES ($1, $2, $3, $4, $5) RETURNING id",[username, password,"","",0])

    const userId =  result.rows[0].id;

    const hdNode = HDNodeWallet.fromSeed(seed)
    const child = hdNode.derivePath(`m/44'/60'/${userId}'/0`)

    await client.query('UPDATE userBinance SET depositeAddress=$1, privateKey=$2 WHERE id=$3',[child.address,child.privateKey,userId])
    console.log(child)
    res.status(200).json({
        userId : userId
    })
})

app.listen(8000,()=>{
    console.log("servers is running on port 8000")
})