
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { http, createConfig, WagmiProvider, useConnect, useAccount, useBalance} from "wagmi"
import { mainnet } from "wagmi/chains"
import { injected } from "wagmi/connectors"

const config = createConfig({
  chains : [mainnet],
  connectors : [
    injected()
  ],
  transports : {
    [mainnet.id] : http()
  }
})

const client = new QueryClient()

function App() {
  
  return (
    <>
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <WalletConnector/>
        <SendEth/>
        <MyAddress/>
      </QueryClientProvider>
    </WagmiProvider>
    
    </>
  )
}


function WalletConnector(){
  const { connectors, connect} = useConnect()
  
  return connectors.map((item) =>(
      <button onClick={() => connect({connector:item})} key={item.uid}>{item.name}</button>
    ))
    

}

function MyAddress(){
  const {address} = useAccount() // it will return the current account address which you're connected 
  const balance = useBalance({address}) // fetch the balance of the given address

  return <div>
    Address : {address}<br/>
    Balance : {balance.data?.formatted}
  </div>
}

function SendEth(){
  return <div>
    <input type="text" />
    <button>send eth</button>
  </div>
}

export default App
