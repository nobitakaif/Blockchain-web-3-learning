import express from "express";
import jwt from "jsonwebtoken"
import {Keypair} from "@solana/web3.js"
import { uesrModel } from "./model";

const app = express()
app.use(express.json())
console.log(process.env.JWT_SCRETE)
app.post('/api/v1/signup',async(req,res)=>{
    const key = new Keypair() // it will generate the public and private key both 

    const { username, password } = req.body;
    // you can add more checks here like zod input validation and hash the password then put it to the db and check if user is already exist or not
    const user = await uesrModel.create({
        username: username,
        password : password,
        publicKey : key.publicKey.toString(), // type of public is not string, it's type is also publicKey sams as private key 
        privateKey : key.secretKey.toString() // [11,2,3,21,32,12]
    })
    console.log(user.id)
    res.status(200).json({
        publicKey : user.publicKey?.toString()
    })
})

app.post('api/v1/signin',async(req,res)=>{
    const { username, password } = req.body

    const user = await uesrModel.findOne({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            id :user.id
        },process.env.JWT_SCRETE!)

        res.status(200).json({
            token : token
        })
    }else{
        res.status(403).json({
            msg : "invalid credentials"
        })
    }
})


app.listen(8000,()=>{
    console.log("server is running on port 8000")
})