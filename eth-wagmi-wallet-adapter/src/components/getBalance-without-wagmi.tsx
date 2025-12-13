
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"

const queryClient = new QueryClient()

export default function App(){
  
  return <QueryClientProvider client={queryClient}>
    <Todo/>
  </QueryClientProvider>

} 

async function getBalance(){
  const client = createPublicClient({
    chain : mainnet,
    transport : http() // which way you want talk to the blockchain, is it http or websocket etc.
  })
  const balance = await client.getBalance({address: "0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9" })
  return balance.toString() 
}

function useBalance(){
  return useQuery({queryFn:getBalance,queryKey:["balance"]})
}

function Todo(){
  const { data, isLoading, error } = useBalance() // you can use it without hooks, 
  if(error){
    <h4>Error while fetching the balance</h4>
  }
  if(isLoading){
    return "Loading...."
  }
  return <div>
    {JSON.stringify(data)}
  </div>
}