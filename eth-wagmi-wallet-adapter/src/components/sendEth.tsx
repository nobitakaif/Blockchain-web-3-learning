import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SendEth(){
    return <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="h-72 w-72 flex flex-col gap-3 rounded-lg  border p-2">
            <Input placeholder="enter "></Input>
            <Button >send 0.1 eth</Button>
        </div>
    </div>
}