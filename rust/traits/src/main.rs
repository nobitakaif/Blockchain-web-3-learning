
struct User{
    username : String,
    password : String,
}

fn main(){
    let obj = User{
        username : String::from("nobitakaif"),
        password : String::from("password")
    };
    print(obj);
}

// fn print_num<T>(opt : T){ // we can't print directly T type becuase T could be anything that doesn't impleted default 
//         // Display traits eg -> strcut, rust don't know how to print struct 
//     println!("{}", opt);
// }

fn print<T: std::fmt::Display>(opt : T){
    println!("{}",opt);
}









// use std::ops::Add;
// fn main() {
//     println!("Hello, world!");
//     let x = sum("kaif", "nobita");
//     println!("{}", x);
// }

// struct Shape2{
//     username : String,
//     age : u8
// }

// trait Shape{
//     fn area()->{
//         println!("alright");
//     }
// }

// fn sum<T: Add<Output = &T>>(a :&T, b: &T )-> &T{
//     return &b;
// }