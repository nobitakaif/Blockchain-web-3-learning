
use std::fs;

struct Shape{
    height : i32,
    width : i32,
}

impl Shape{
    fn area(&self) -> i32 { // if you don't write &self in args it will become static function we can call that fn() without obj
        return self.height * self.width
    }

    fn perimeter(&self, _num: i32)->i32{
        return 2* (self.height + self.width);
    }

    fn shape()-> i32{ // this is static function we can call the function like Shape::shape()
        return 1;
    }

}

enum Direction {
    North, 
    South, 
    East, 
    West,
}




fn main(){
    let r1 = Shape{
        width : 10,
        height : 29,
    };

    let dir:Direction = Direction::South;

    // let dir2 = dir;
    moved_step(dir);
    
    // fs::read_to_string() this return you enum of <String, Error>
    let contents = fs::read_to_string("a.txt"); // reading the content from the diff file 
    // trying to catch the error 
    match contents {
        Ok(contents)=> println!("{}", contents), // if it successed to read the content 
        Err(e)=>println!("error while reading the contents") // if it failed
    }

    println!("alright");
    println!("{}",r1.area());
    println!("{}",Shape::shape());
    println!("{}",r1.perimeter(5));

    let nob = String::from("nobitakaif");

    let test = find_char_a(nob);
    match test{
        Option1::Some(idx, arr)=>println!("a found at index {x}, {}", idx, arr[arr.len()-1]),
        Option1::None => println!("value is not found")
    }
}

enum Option1{
    Some(u32, Vec<u32>),
    None
}

fn find_char_a(str: String)-> Option1{
    let mut index :u32 = 0;
    let mut arr : Vec<u32> = vec![];
    for c in str.chars(){
        if c =='a'{
            println!("alright");
            arr.push(index)
        }
        index = index+1;
    }
    if arr.is_empty(){
        return Option1::None;
    }
    else{
        return Option1::Some(index,arr);
    }
}

fn moved_step(dir:Direction) {
    match dir{
        Direction::North => println!("you moved north direction "),
        Direction::East => println!("you moved east direction "),
        _ => println!("you still stay there"),
    }
}














// struct Rect{
//     height : f32,
//     widhth : f32,
// }

// impl Rect{
//     fn area(&self)->f32{
//         return self.height * self.widhth;
//     }

//     fn pring_something(_a :  u32){
//         println!("static function");
//     }
// }

// enum Direction {
//     North,
//     South,
//     East,
//     West,
// }

// fn main() {

//     // let _r : Rect = {
//     //     widhth : 10.0,
//     //     height : 10.0
//     // };

//     let direction:Direction = Direction::East;
//     steer(direction)

//     // println!("{},{}", r.widhth , r.height);




//     // let mut str = String::from("nobitakaif");
//     // let  str2 = &mut str;
//     // str2.push_str(" kaif");
//     // let str3 = &str;
//     // println!("{}",str3);
// }

// fn steer(dir:Direction){
//      match dir {
//         Direction::North => println!("north direction"),
//         Direction::South => println!("south direction"),
//         _ => println!("none of these"),
//     }
// }