
struct Shape{
    height : i32,
    width : i32,
}

impl Shape{
    fn area(&self) -> i32 { // if you don't write &self in args it will become static function we can call that fn() without obj
        return self.height * self.width
    }

    fn perimeter(&self, num: i32)->i32{
        return 2* (self.height + self.width);
    }

    fn shape()-> i32{ // this is static function we can call the function like Shape::shape()
        return 1;
    }

}


fn main(){
    let r1 = Shape{
        width : 10,
        height : 29,
    };
    println!("alright");
    println!("{}",r1.area());
    println!("{}",Shape::shape());
    println!("{}",r1.perimeter(5));
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