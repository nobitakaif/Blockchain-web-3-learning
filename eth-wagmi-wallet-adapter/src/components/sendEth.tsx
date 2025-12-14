import { useAccount, useBalance, useConnect, useSendTransaction,  } from "wagmi";
import {formatUnits, parseEther, type Address} from "viem"

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Check, Copy } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useRef, useState,  } from "react";

export default function SendEth(){
    const { address } = useAccount();
    const { connectors, connect } = useConnect(); // this hooks comes from wagmi, which let you do to connect the application with wallet, 
    const  balance = useBalance({address : address})
    const [ isCopy, setIsCopy ] = useState(true)
    const { data : hash, sendTransaction} = useSendTransaction()
    const amountRef = useRef<null | HTMLInputElement>(null)
    const toRef = useRef<null | HTMLInputElement>(null)
    function  sendEth(){
        sendTransaction({
            to : toRef.current?.value! as Address,
            value :parseEther(amountRef.current?.value!)
        })
    }
    const addressRef = useRef<null | HTMLInputElement>(null)
    // formatUnits(balance.data?.value!, 18)
    return <div className="h-screen w-full flex items-center justify-center flex-col gap-2">
        
        <div className="flex flex-col gap-2  items-center  border-black rounded-xl w-104 h-88 justify-center">
            <div className="flex items-center gap-1">
                <Input type="text" value={address} className="w-91 font-bold " disabled ref={addressRef}>
                    {/* <Copy/> */}
                </Input>
                { isCopy ? <div className="h-full flex justify-center items-center cursor-pointer" onClick={()=>{
                        navigator.clipboard.writeText(addressRef.current!.value)
                        setIsCopy(false)
                        setTimeout(()=>{
                            setIsCopy(true)
                        },3000)
                    }}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Copy className="h-8 w-6 mt-1 text-gray-500"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Copy</p>
                            </TooltipContent>
                        </Tooltip>
                        
                    </div> 
                : 
                    <div>
                        <Check className="text-green-400"/>
                    </div>
                }
            </div>
            <div className="w-full">
                <Button variant={"link"} > {Number(balance.data?.value)/1e18} eth </Button> 
            </div>
            <div className=" w-100 flex flex-col gap-3 rounded-lg border p-2">
                <Input placeholder="enter eht..." ref={amountRef}></Input>
                <Input placeholder="to..." ref={toRef}/>
                <Button onClick={sendEth} >send 0.1 eth</Button>
                {connectors.map((connector)=>( // iterating all the wallet which we had imported in App.tsx eg. injected, bckp, phnt
                    <Button 
                        key={connector.id}
                        onClick={()=> connect({connector})} 
                        className="bg-blue-500"
                    >
                        {connector.name}
                    </Button>
                ))}
            </div>
        </div>
    </div>
}