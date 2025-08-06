
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './components/Airdrop';

function App() {
  

  return (
    <>
    {/* endpoint is the RPC url that depends on us which one we want to follow (Mainnet or Devnet)  */}
      <ConnectionProvider endpoint="https://wiser-patient-bridge.solana-devnet.quiknode.pro/1c0f7500ff09656d591214eabe7eb082cef11915/">
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton/>
            <Airdrop/>
            <WalletDisconnectButton/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App
  