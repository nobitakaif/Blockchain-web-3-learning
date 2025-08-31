import { useRef } from "react"

export default function TokenLaunchPad(){
    const nameRef = useRef<HTMLInputElement | null>(null)
    const symboleRef = useRef<HTMLInputElement | null > (null )
    const imageRef = useRef<HTMLInputElement | null > (null )
    const supplyRef = useRef<HTMLInputElement | null > (null )

    const createToken=()=>{
        const nameValue = nameRef.current?.value
        const syboleValue = symboleRef.current?.value
        const imageValue = imageRef.current?.value
        const supplyValue = symboleRef.current?.value



    }
    
    return <div style={{
        display: "flex",
        justifyContent : 'center',
        flexDirection : "column",
        
    }}>
        <input type="text" placeholder="Name" ref={nameRef}/>
        <input type="text" placeholder="Symbole" ref={symboleRef}/>
        <input type="text" placeholder="Image URL" ref={imageRef}/>
        <input type="text" placeholder="Initial Supply" ref={supplyRef}/>

        <button onClick={createToken}>Create Token</button>
    </div>
}