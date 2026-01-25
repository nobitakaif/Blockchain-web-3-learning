#![allow(clippy::result_large_err)]
use anchor_lang::prelude::*;

declare_id!("F4jZpgbtTb6RWNWq6v35fUeiAsRJMrDczVPv9U23yXjB");

#[program] 
pub mod vault {
    use super::*;
    pub fn create_jaurnal_enty(ctx : Context<CreateEntry>, title: String,meesage : String)-> Result<()>{
        let journal_entry  = &mut ctx.accounts.journal_entry;
        journal_entry.owner = title;
        journal_entry.message = meesage;
        Ok(())
    }
    
    pub fn update_journal_entry(ctx: Context<UpdateEntry>, _title: String, message : String) -> Result<()>{
        let journal_entry = &mut ctx.accounts.jouranl_entry;
        journal_entry.message = message;
    }

    pub fn delete_journal_entry(ctx: Context<DeleteEntry> _title : String)->Result<()>{
        ctx.accounts.jouranl_entry.close()?;
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(title : String)]
pub struct CreateEntry<'info>{
    #[account(init, seeds = [title.as_bytes(), owner.key().as.ref()], bump, sapce = 8 + JournalEntryState::INIT_SPACE, payer = owner)]
    pub journal_entry : Account<'info, JournalEntryState>,
    #[account(mut)]
    pub owner : Signer<'info>,
    pub system_program : Program<'info, System>
}


#[derive(Accounts)]
#[instruction(title : String)]
pub struct UpdateEntry<'info>{
    #[account(mut, seeds = [title.as_bytes(),owner.key().as_ref()], bump, realloc = 8 + JournalEntryState::INIT_SPACE, realloc::payer = owner, realloc::zero = true)]

    #[account(mut)]
    pub owner  : Signer<'info>
    pub system_program : Program<'info, System>
}

#[account]
#[derive(InitSpace)]
pub struct JournalEntryState{
    pub owner : Pubkey,
    #[max_len(50)]
    pub title : String,
    #[max_len(1000)]
    pub message : String,
}