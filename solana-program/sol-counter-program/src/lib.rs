use borsh::{BorshDeserialize,BorshSerialize};
use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint::ProgramResult, entrypoint,
    pubkey ::Pubkey,
    
    msg
};

// converting into data into bits using serialization 
#[derive(BorshDeserialize, BorshSerialize)]
enum InstructionType{ //what kind of function user can use or what instruction this contract support eg->inc(),dec(),sum(),mul()
    Increment(u32),
    Decrement(u32)
}

#[derive(BorshDeserialize,BorshSerialize)]
struct Counter{ // defining the state or what we are storing on the blockchain
    count : u32
}

entrypoint!(counter_contract);

pub fn counter_contract(
    program_id : &Pubkey,
    accounts : &[AccountInfo],
    instruction_data : &[u8] // the instruction_data look like bunch of bit/bytes [1 0 1 1 0 1 0 1 0 0 1 0 1 0 1 1 1 0]  we need to some how make the function if first bits is  0 -> increase() if it is 1 -> decrease() something like that and rest of the bits could be arguments depend on the us whether we're sending args or not 
) -> ProgramResult{
    let account:&AccountInfo<'_> = next_account_info(&mut accounts.iter())?; // it will return the first index of array 

    let instruction_type:InstructionType = InstructionType::try_from_slice(instruction_data)?;
    let mut counter_data :Counter = Counter::try_from_slice(&account.data.borrow())?; 
    
    match instruction_type{
        InstructionType::Increment(value )=>{
            msg!("increase");
            counter_data.count += value;
        },
        InstructionType::Decrement(value )=>{
            msg!("decrease");
            counter_data.count -= value;
        }
            
    }
    counter_data.serialize(&mut *account.data.borrow_mut());
    msg!("Contract Succeed");
    Ok(())
}