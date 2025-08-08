
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './components/Airdrop';
import ShowBalance from './components/ShowBalance';
import SendSolana from './components/sendToken';

function App() {
  

  return (
    <>
    {/* endpoint is the RPC url that depends on us which one we want to follow (Mainnet or Devnet)  */}
      <ConnectionProvider endpoint="https://api.devnet.solana.com">
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton/>
            {/* <Airdrop/>
            <ShowBalance/> */}
            <SendSolana/>
            <WalletDisconnectButton/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App
  