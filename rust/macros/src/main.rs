
macro_rules! say_hello{
    () => {
        println!("hello world from macro");
    }
}

#[derive(Debug)] // using this macro we can print the Struct
struct User {
    username : String,
    password : String,
    age : u32
}

// trait Display{
//     fn display(&self) ->String{
//         return String::from("This is default");
//     }
// }

// impl Display for User{
//     fn display(&self)-> String {
//         return format!("{},{},{}",self.username,self.password, self.age);
//     }
// }

fn main() {
    say_hello!();
    let u = User{
        username : String::from("nobitakaif"),
        password : String::from("password"),
        age : 32
    };
    println!("{:?}",u);
}
