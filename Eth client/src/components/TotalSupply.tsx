import { useReadContract } from "wagmi"

export default function TotalSupply(){

    const { data, isLoading, error } = useReadContract({
        address : "0xdac17f958d2ee523a2206206994597c13d831ec7",
        abi:[{
            "constant" : true,
            "inputs" : [],
            "name" : "totalSupply",
            "outputs" : [{
                "name":"",
                "type":"uint256"
            }],
            "payable" : false,
            "stateMutability":"view",
            "type" : "function"
        }],
        functionName : "totalSupply"
    })
    if(isLoading){
        return <div>
            Loading...
        </div>
    }

    const totalValue = () => {
        return data ? Number(data.toString()) : undefined;
    }
    return (
        <div>
            Total Supply of coin : {typeof totalValue() === "number" ? totalValue()! / 6 : "N/A"}
        </div>
    );
}