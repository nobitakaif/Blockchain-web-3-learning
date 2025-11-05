
use solana_program::{
    account_info ::{AccountInfo, next_account_info},
    entrypoint::ProgramResult, 
    entrypoint,
    pubkey :: Pubkey,
    msg
};

use borsh::{BorshDeserialize, BorshSerialize};
// when we write smart contract natively then it expect only single function in single function we need to do all the thing but anchor library let you do, we can write as many function we want but natively don't
// natively required 3 args
// 1 -> publicKey of contract, where it is deployed but the question how will i know where it is deployed before deploying? eventually user will call our contract then he will pass the progarm_id/publicKey
// -> array of account 
// instruction of data [] -> what instrcutin we to execute, will it be increase, decrease, multiply [0,11,22,43,255]
#[derive(BorshSerialize, BorshDeserialize)]
struct Count{
    value : u32
}
#[derive(BorshSerialize, BorshDeserialize)]
enum Instruction{
    Increament(u32),
    Decreament(u32)
}


entrypoint!(counter_contract);
pub fn counter_contract(
    program_id : &Pubkey, // public key of where it is deployed this program 
    accounts : &[AccountInfo],
    instruction_data : &[u8] // 0->255 [44,42,25,0,25]
)->ProgramResult{
    let account =  next_account_info(&mut accounts.iter())?;

    
}



