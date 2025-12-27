#[derive(Debug, Clone,Copy)]
struct User{
    is_male : bool,
    age : u32,
}
fn main(){
    let u = User{ // struct does follow ownership rule but this struct doesn't have any heap storage so we need to explicitly tell that follow Copy traits not Clone because Clone uses when data stored in head
        is_male : true,
        age : 32
    };
    let u2 = u;
    print!("{:?}", u);
}










// use std::fmt::Debug;
// use std::fmt::Display;
// use std::fmt::Formatter;
// use std::fmt::Result;

// // #[derive(Debug)]
// struct User{
//     username : String,
//     password : String,
// }

// impl Debug for User{
//     fn fmt(&self, f: &mut Formatter<'_>) -> Result {
//         write!(f ,"users look like : {}, {}",self.username, self.password)
//     }
// }
// fn main(){
//     let user = User{
//         username : String::from("nobitakaif"),
//         password : String::from("nobitapassword")
//     };
//     println!("{:?}", user);
// }






// macro_rules! say_hello {
//     () => {
//         print!("hello from macros");
//     };
// }

// fn main(){
//     let arr = [1,2,3,5];
//     let v = vec![1,2,4];
//     println!("hello world");
//     say_hello!();
// }


// trait Shape {
//     fn area(&self)->u32;
//     fn common(&self)->u32;
// }
// struct Rect{
//     widht : u32,
//     height : u32
// }

// impl Shape for Rect{
//     fn common(&self)-> u32{
//         return self.widht * self.height;
//     }
//     fn area(&self)->u32 {
//         return self.widht * self.height;
//     }
// }


// fn get_area<T : Shape>(r :T){
//     print!("{}",r.area()) ;
// }

// fn main() {
//     println!("Hello, world!");
//     let r = Rect{
//         height : 55,
//         widht : 5,
//     };
    
//     print!("{}", r.area());
// }
