
// show the ethereum balance 
import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"


const queryclient = new QueryClient()

async function getBalance(){
    const client = createPublicClient({
      chain : mainnet,
      transport : http(),
    })
    const res = await client.getBalance({address : "0x8a9B6eE6531cFdFaCAf629483ae6C105c6133fe9"});
    console.log(res)
    return res.toString();
}


function ShowBalance() {
  
  return (
    <>
    <QueryClientProvider client={queryclient}>
      <Todos/>
    </QueryClientProvider>
    </>
  )
}

function Todos(){
  const query = useQuery({queryKey : ['balance'],queryFn : getBalance ,refetchInterval : 10*1000})

  if(query.isLoading){
    return "Loading..."
  }
  
  return <div>
    Balance : 
    {query.data}
  </div>
}

export default ShowBalance
