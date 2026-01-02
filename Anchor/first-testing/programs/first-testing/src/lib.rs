use anchor_lang::prelude::*;

declare_id!("BbuW9PZVrGzBUhQEcjs7XymVUrdvNuoVfpXV5ftRDyUS");

#[program]
pub mod first_testing {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
