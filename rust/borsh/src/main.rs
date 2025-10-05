use borsh::{BorshSerialize, BorshDeserialize};

#[derive(BorshDeserialize,BorshSerialize, Debug)]
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
    let ans = user.serialize(&mut vec); // putting the number(bits & bytes) into array user.serialize(args[]) will convert into 0-255 numbers and put inside args[]

    match ans{
        Ok(_) => println!("serialization {:?}", vec),
        Err(_) => println!("error while serialization")
    }

    let back_to_obj = User::try_from_slice(&vec); // this will convert into array of bytes into object 
    match back_to_obj{
        Ok(obj) => println!("back to object {:?}", obj),
        Err(_) => println!("error while converting bytes into object")
    }
}
