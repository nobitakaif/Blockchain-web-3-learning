
struct Rect{
    width : u32,
    height : u32,
}

impl Rect{
    fn area(&self){
        println!("mutliply {}", self.width * self.height);
    }
    fn common(){
        println!("static function");
    }
}

// fn main(){
//     let r = Rect{
//         height : 45,
//         width  : 54,
//     };
//     println!("{},{}",r.width, r.height);
//     r.area();
//     // Rect::common();
// }




fn main(){
    let mut s1 = String::from("helow");
    let s2 = get_length(&mut s1);
    s1.push_str("world");
    println!("{}", &s1);
    println!("{}", &s2);

    let mut string = String::from("common");
    let string2 = &mut string;
    string2.push_str(" common");
    let string3 = &string;
    // string2.push_str(" common");
    
    println!("{}", string3);

}

fn get_length(s:&mut String)-> usize{
    return s.len();
}









// fn main() {
//     let mut str = String::from("nobitakaif");
//     let str2 = &mut str;
//     str2.push_str(" kaifkaif");
//     let str4 = & mut str;
//     str4.push_str(" common");
//     let nobit= &str;

//     println!("{}", str);
// }
