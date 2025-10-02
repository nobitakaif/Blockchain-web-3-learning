use chrono::prelude::*; // importing chrono library form docs.rs similar as npmjs registry, * means import everything 
// use chorno::Utc; // just importing Utc this library let you do date/time realted things
use dotenv::dotenv;
use std::env;

fn main(){
    let utc = Utc::now(); // it tells you utc time 12:00
    let local = Local::now(); // it tells you local time like 5:30 
    println!("{},{}",utc,local);

    dotenv().ok(); // reading .env file acceptance

    let http_server = env::var("http"); // it return you Result<String, Error>
    // let http_wraped = http_server.unwrap(); //.upwrap() will throw if https is not present in the .env file and don't exicute code
    // print!("{}",http_wraped);
    match http_server{
        Ok(str) => println!("your server is running on {}", str), // if successed 
        Err(e)=> println!("Error while reading .env file") // if not
    }
}