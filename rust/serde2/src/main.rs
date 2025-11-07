
use serde::{Serialize,Deserialize};

#[derive(Debug,Serialize, Deserialize)]
struct User{
    username : String, 
    password : String,
}

fn print_type_of<T>(_: T) { // this function tells what's the variable type 
    println!("{}", std::any::type_name::<T>());
}
fn main() {
    let user = User{
        username : String::from("nobitakaif"),
        password : String::from("nobitakaif")
    };
    // let v = Vec::new();
    let string_str = serde_json::to_string(&user); 

    match string_str{
        Ok(s)=> {
            print_type_of(&s);
            println!("struct to string {}", s);
            let struct_back:Result<User, serde_json::Error> = serde_json::from_str(&s);
            
            match struct_back {
                Ok(s)=>{
                    print_type_of(&s);
                    print!("string back to struct {:?}",s);
                }
                Err(e)=> print!("error while deserialization and the error is {}",e)
            }

        },
        Err(_) => print!("something went wrong"),
    }

    // let struct_back:Result<User, serde_json::Error> = serde_json::from_str(&string_str);

    // match struct_back{
    //     Ok(s)=> print!("{:?}", s),
    //     Err(e)=> print!("error while deserialization and the error is {}",e )
    // };
}
