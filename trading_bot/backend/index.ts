import { Keypair } from "@solana/web3.js"
import express from "express"
    import { PrismaAdapter } from "@prisma/adapter-postgres"
import { PrismaClient } from "./generated/prisma/client"

const app = express()

    const adapter = new PrismaAdapter(process.env.DATABASE_URL as string)
    const client = new PrismaClient({
    adapter
})
app.post("/signup", async(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    // do zod validation 

    const keypair = new Keypair()
    const resposne = await client.user.create({
        data: {
            email,
            password,
            publicKey: keypair.publicKey.toString(),
            privateKey: keypair.secretKey.toString()
        }
    })
    res.json(resposne)
})