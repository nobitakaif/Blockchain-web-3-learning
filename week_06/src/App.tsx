
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useRef } from "react"
import { http, createConfig, WagmiProvider, useConnect, useAccount, useBalance, useSendTransaction} from "wagmi"
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
  const { data : hash , sendTransaction} = useSendTransaction()
  const addressRef = useRef<HTMLInputElement|null>(null)

  function sendBtn(){
    const address = addressRef.current?.value
    if(!address){
      alert("please enter address then send again")
      return;
    }
    sendTransaction({
      to: address.toString() as `0x${string}`,
      value : 100000000000000000n // 17 0s = 0.1 eth
    })
  }

  return <div>
    <input type="text" ref={addressRef} />
    <button onClick={sendBtn}>send Eth</button>
    Signature : {hash}
  </div>
}

export default App
