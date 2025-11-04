
use std::io;
struct Rect{
    width : u32,
    height : u32,
}

impl Rect{
    fn area(&self){
        println!("mutliply {}", self.width * self.height);
    }
    fn common(){
        println!("static function"); // static don't need to initializing struct
    }
}

enum Direction{
    North,
    South,
    East,
    West
}

fn main(){
    // let r = Rect{
    //     height : 45,
    //     width  : 54,
    // };
    let moved = Direction::North;
    match moved {
        Direction::North => print!("you moved north direction"),
        Direction::South => print!("you moved south direction "),
        _ => print!("you moved nothing") // catch if none of matched
    }
    // let mut user_input = String::new();
    // println!("pick your Direction East, West, South, North");
    // io::stdin()
    //     .read_line(&mut user_input)
    //     .expect("worng input");
    // user_input = user_input.trim().to_string();
    // let direction = match user_input.as_str() {
    //     "East" => Direction::East,
    //     _ =>{
    //         println!("invalid input");
    //         return;
    //     }
    // };
    
}




// fn main(){
//     let mut s1 = String::from("helow");
//     let s2 = get_length(&mut s1);
//     s1.push_str("world");
//     println!("{}", &s1);
//     println!("{}", &s2);

//     let mut string = String::from("common");
//     let string2 = &mut string;
//     string2.push_str(" common");
//     let string3 = &string2;
//     // string2.push_str(" common");j
    
//     println!("{}", string3);

// }

// fn get_length(s:&mut String)-> usize{
//     return s.len();
// }









// fn main() {
//     let mut str = String::from("nobitakaif");
//     let str2 = &mut str;
//     str2.push_str(" kaifkaif");
//     let str4 = & mut str;
//     str4.push_str(" common");
//     let nobit= &str;

//     println!("{}", str);
// }
