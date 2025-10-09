use std::fmt::{write, Debug,Formatter};
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


// trait Deploy{
//     fn fmt(&self,f: &mut Formatter<'_>) -> std::fmt::Result{
//         return write!(f,"default one is executed ");
//     }
// }

// impl Debug for User{ // debug will work when we print like {:?} like this for this {} we have to use display imp 
//     fn fmt(&self, f: &mut Formatter<'_>)-> std::fmt::Result{
//         return write!(f, "Debug : users username is {}",self.username);
//     }
// }

trait Display{
    fn fmt(&self, f: &mut std::fmt::Formatter) ->std::fmt::Result{
        write!(f,"This is default display")
    }
}

impl Display for User{
    fn fmt(&self, f: &mut std::fmt::Formatter)-> std::fmt::Result {
        write!(f,"This is display {},{},{}",self.username,self.password, self.age)
    }
}

fn main() {
    say_hello!();
    let u = User{
        username : String::from("nobitakaif"),
        password : String::from("password"),
        age : 32
    };
    println!("{:?}",u);
    println!("{:?}",u);
}
