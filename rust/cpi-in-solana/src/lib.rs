
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::account_info::next_account_info;
use solana_program::msg;
use solana_program::{
    account_info::AccountInfo,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    entrypoint
};

#[derive(BorshDeserialize, BorshSerialize)]
struct OnChainData{
    count : u32
}

entrypoint!(program_instruction);
fn program_instruction(
    program_id : &Pubkey,
    accounts : &[AccountInfo],
    instruction_data : &[u8]
) ->ProgramResult {
    // let account = accounts[0].clone(); // we can also use this way to get first account 

    let mut iter = accounts.iter();
    msg!(" the value of iter -> {:?}",iter);
    let data_account = next_account_info(&mut iter)?; //first account, we can use it again the same thing to get second, third, fourth and so on so fourth

    // data_account.data -> here is the actual data like &[u8]
    // converting agrs data into our own struct using serialiaze
    let mut counter = OnChainData::try_from_slice(&data_account.data.borrow_mut())?;
    // if data_account.data only has 8 bytes = 32 bites then it only serialized if it is 0 bytes, 12 bytes 200 bytes etc then it will throw an error 

    if counter.count == 0{
        // initilaizing the the count for fist time 
        counter.count = 1;
        msg!("initializing the count")
    }
    else{
        // doubling the count
        counter.count = counter.count * 2;
        msg!("doubling the count")
    }

    counter.serialize(&mut *data_account.data.borrow_mut());
    
    msg!("all done ");
    return Ok(());
}