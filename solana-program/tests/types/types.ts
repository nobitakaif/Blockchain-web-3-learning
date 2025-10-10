import * as borsh from "borsh"

export class CounterContract{
    count : number

    constructor(count : number){
        this.count= count
    }
}

export const schema : borsh.Schema = {
    struct:{
        count : 'u32',
    }
}

export const contract = new CounterContract(0)
export const COUNTER_SIZE = borsh.serialize(schema,contract ).length;

console.log(borsh.serialize(schema,new CounterContract(256)))