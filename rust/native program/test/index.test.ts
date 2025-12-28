import * as borsh from "borsh"

// js don't have concept of struct and rust don't have concept of class so some how we need to tell the rust that class as a struct so rust will get args as a strcut. 
class CounterAccount{
    count : number
    
    constructor(count:number){
        this.count = count
    }

}
// this is schema or struct how struct look like 
const schema : borsh.Schema = {
    struct:{
        count : 'u32' // in rust we defined struct only one var which is count if there were a more var then here need to specifiy more 
    }
}

