
import { useWriteContract } from "wagmi"
export const AllowUSDT = ()=>{
    const { data, writeContract} = useWriteContract()
    const submit = ()=>{
        writeContract({
            address : "0xdac17f958d2ee523a2206206994597c13d831ec7",
            abi : [{
                "constant":false,
                "inputs":
                    [{
                        "name":"_spender","type":"address"
                    },{
                        "name":"_value","type":"uint256"
                    }],
                "name":"approve",
                "outputs":[],
                "payable":false,
                "stateMutability":"nonpayable",
                "type":"function"
                },
            ],
            functionName : "approve",
            args : ["0xdac17f958d2ee523a2206206994597c13d831ec7" , BigInt(1)]
        })
    }
    return <div>
        <button onClick={submit}
        >approve</button>
    </div>
}