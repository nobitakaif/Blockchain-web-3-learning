
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WalletConnector from './components/walletConnecter'



const qurey = new QueryClient()
function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={qurey}>
        <WalletConnector/>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
