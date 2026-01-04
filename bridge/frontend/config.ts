import { http, createConfig, injected } from "wagmi"

import { mainnet } from "wagmi/chains"
import { metaMask } from "wagmi/connectors"

export const config = createConfig({
    chains : [mainnet],
    connectors :[metaMask(), injected()],
    transports:{
        [mainnet.id] : http("https://eth-mainnet.g.alchemy.com/v2/doa_20ngGidfEAHk2U0gBAEcICOg7c0e")
    }
})