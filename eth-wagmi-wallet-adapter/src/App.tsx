import { Input } from "./components/ui/input";
import { createConfig, http, injected, WagmiProvider } from "wagmi"
import { mainnet, base, sepolia } from "wagmi/chains"
import { Button } from "./components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SendEth from "./components/sendEth";
import { ThemeProvider } from "./components/ui/theme-provider";

const querClient = new QueryClient()

const config = createConfig({
  chains : [sepolia, base],
  connectors : [
    injected()
  ],
  transports:{
    [sepolia.id] :http(),
    [base.id] : http()
  }
})


export default function App(){
  return <ThemeProvider defaultTheme="dark">
    <WagmiProvider config={config}>
      <QueryClientProvider client={querClient} >
        <SendEth/>
      </QueryClientProvider>
    </WagmiProvider>
  </ThemeProvider> 
}