import { Input } from "./components/ui/input";
import { createConfig, http, injected, WagmiProvider } from "wagmi"
import { mainnet, base } from "wagmi/chains"
import { Button } from "./components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SendEth from "./components/sendEth";

const querClient = new QueryClient()

const config = createConfig({
  chains : [mainnet, base],
  connectors : [
    injected()
  ],
  transports:{
    [mainnet.id] :http(),
    [base.id] : http()
  }
})


export default function App(){
  return <WagmiProvider config={config}>
    <QueryClientProvider client={querClient} >
      <SendEth/>
    </QueryClientProvider>
  </WagmiProvider>
}