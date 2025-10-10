import * as borsh from "borsh"

class CounterContract{
    count : number

    constructor(count : number){
        this.count= count
    }
}

const sheme : borsh.Schema = {
    struct:{
        count : 'u32',
        count2 : 'u32'
    }
}