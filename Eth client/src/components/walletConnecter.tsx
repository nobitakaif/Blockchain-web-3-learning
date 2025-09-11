import { useConnectors } from "wagmi"


export default function WalletConnector(){
    const connector = useConnectors()
    return <div>
        {connector.map(c => <button key={c.name}>
            connect via {c.name}
        </button>)}
    </div>
}