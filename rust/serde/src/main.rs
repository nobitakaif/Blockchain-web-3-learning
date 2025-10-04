
use serde::{Serialize, Deserialize};
use std::fmt::{Debug};
#[derive(Serialize,Deserialize, Debug)]
struct User{
    username : String,
    password : String
}

fn main(){
    let user = User{
        username : String::from("username"),
        password : String::from("password")
    };
    // println!("{:?}",user.username);
    let serialize = serde_json::to_string(&user); // it will convert obj into string 
    match serialize{
        Ok(str) =>{
            println!("User look like {}",str);
            let deserialize : User = serde_json::from_str(&str).expect("failed while converting into object");
            println!("object {:?}",deserialize);
            // match deserialize {
            //     Ok(obj) => println!("{}",obj),
            //     Err(_) => println!("something went wrong in deserialization")
            // }
        } // we can't use str.username becuase it's string not an obj
        Err(_) => println!("Something happen wrong here")
    }
    // let deserialize = serde_json::from_str(&serialize).expect("failed ");
    // match deserialize{
    //     Ok(obj) => println!("object {:?}", obj),
    //     Err(_) => println!("something went wrong")
    // }
    // println!("{}",serialize);
}