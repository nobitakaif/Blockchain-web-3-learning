

import { WagmiProvider } from 'wagmi'
import { config } from "../config"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
