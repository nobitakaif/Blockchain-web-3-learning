import { useAccount, useConnect, useConnectors, useDisconnect } from "wagmi"
import TotalSupply from "./TotalSupply"
import { AllowUSDT } from "./AllowUsdt"


export default function WalletConnector(){
    // This hooks only work inside wagmi provider, you have wrap the components insie <wagmiProvider conne> 
    const { address } = useAccount() // this hook will tell you you're connect or not via wallet
    const connector = useConnectors() // this hook used for connecting to the wallet 
    const {disconnect} = useDisconnect() // this hook will disconnect you if you're connected to walled
    const { connect } = useConnect()

    if(address){
        return <div style={{
            display : "flex",
            alignItems : "center",
            height : "100vh",
            width : "100vw",
            flexDirection : "column",
            justifyContent : "center"
            
        }}>
           <div>
             Hey you're connected {address}
            <button onClick={()=>{
                disconnect()
            }}>disconnect</button>
           </div>
            <TotalSupply/>
            <AllowUSDT/>
        </div>
    }

    return <div style={{
            display : "flex",
            width : "100vw",
            height : "100vh",
            alignItems : "center",
            justifyContent : "center",
            flexDirection : "column",
            gap : 5
            
        }}>
        {connector.map(c => <div key={c.name} >
                <button onClick={()=>{
                    connect({connector : c})
                }}>
                    connect via {c.name}
                </button>
        </div>    
        )}
    </div>
}