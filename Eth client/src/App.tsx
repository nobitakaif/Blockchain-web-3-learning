
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WalletConnector from './components/walletConnecter'
import TotalSupply from './components/TotalSupply'



const qurey = new QueryClient()
function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={qurey}>
        <div>
            <WalletConnector/>
            {/* <TotalSupply/> */}
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
