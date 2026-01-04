import { useAccount, useConnect, useConnectors, useDisconnect, useReadContract } from "wagmi"
import {ABIs} from "../abi.ts"
import { AllowUSDT } from "./AllowUSDT.tsx"

export const ConnectWallet=()=>{
    const connector = useConnectors()
    const { address }  = useAccount()
    const { disconnect } = useDisconnect()
    const { connect } = useConnect()

    const { data, isLoading, error} = useReadContract({
        address : "0xdac17f958d2ee523a2206206994597c13d831ec7",
        abi : ABIs,  
        functionName : "balanceOf",
        args :[address]     
    })

    

    if(address){
        return <div className="w-full flex justify-center items-center h-44 gap-4"> 
        Your Address <span className="border rounded-sm w-22 text-center">{address.slice(0, 4)+"..."+address.slice(address.length-4)}</span>
        <button onClick={()=>{
            navigator.clipboard.writeText(address)
        }}>copy</button>
        <button onClick={()=>{
            disconnect()
        }}>Disconnect</button>
        {!isLoading ? <div>
                {data?.toString()}
            </div> : <div>
                isLoading
            </div>
        }
        <AllowUSDT/>
        </div>
    }
    
    return <div className="w-full flex gap-3 justify-center items-center h-44">
        {connector.map(c => (
            <button className="" key={c.id} onClick={()=>{
                connect({connector : c})
            }}>
                {c.name}
            </button>
        ))}
        
    </div>
}