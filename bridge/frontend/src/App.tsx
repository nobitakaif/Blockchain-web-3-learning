

import { WagmiProvider } from 'wagmi'
import { config } from "../config"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import  { ConnectWallet }from "../components/ConnectWallet"

const client = new QueryClient()

function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <ConnectWallet/>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
