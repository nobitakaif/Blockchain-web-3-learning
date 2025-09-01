
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { http, createConfig, WagmiProvider, useConnect} from "wagmi"
import { base, mainnet } from "wagmi/chains"
import { injected } from "wagmi/connectors"

const config = createConfig({
  chains : [mainnet,base],
  connectors : [
    injected()
  ],
  transports : {
    [mainnet.id] : http(),
    [base.id] : http()
  }
})

const client = new QueryClient()

function App() {
  
  return (
    <>
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <SendEth/>
      </QueryClientProvider>
    </WagmiProvider>
    
    </>
  )
}


function WalletConnector(){
  const { connectors, connect} = useConnect()
  
  return connectors.map((item) =>(
      <button onClick={()=> connect({item})} key={item.uid}>{item.name}</button>
    ))
    

}

function SendEth(){
  return <div>
    <input type="text" />
    <button>send eth</button>
  </div>
}

export default App
