use borsh::{BorshSerialize, BorshDeserialize};

#[derive(BorshDeserialize,BorshSerialize)]
struct User{
    username : String,
    password : String
}

fn main() {
    let user = User{
        username : String::from("nobitakaif"),
        password : String::from("nobitakaif")
    };
    
    let mut vec : Vec<u8> = Vec::new(); // defining vec array 
    let ans = user.serialize(&mut vec);

    match ans{
        Ok(_) => println!("serialization {:?}", vec),
        Err(_) => println!("error while serialization")
    }
}
