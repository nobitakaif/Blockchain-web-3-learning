use std::f32::consts::PI;




struct React{
    widht : f32,
    height : f32
}

impl Shape for React{
    fn area(&self)-> f32{
        return self.widht * self.height;
    }
}

struct Circle{
    radius : f32,
}

impl Shape for Circle{
    fn area(&self)-> f32{
        return PI * (self.radius *2.0);
    }
}

trait Shape {
    fn area(&self)->f32;
}

fn print_area_of_shape<T: Shape>(s:T){ // the same thing here we need to tell that T has Shape trait and and Shape has area() 
    print!("{}",s.area());
}


fn sum<T: std::ops::Add<Output = T>>(a:T , b:T , c : T)-> T{ // we can see we need to tell that T should be number and which can is possible to addition  
    return a + b + c;
}


fn main(){
    let react = React{
        widht : 20.0,
        height : 20.0
    };

    let circle = Circle{
        radius : 10.0
    };
    print_area_of_shape(circle);
}


// fn main(){
//     let a = Some("some"); // Option enum -> Option<Some(T), None>
//     match a {
//         Some(val) => print!("value is {}", val),
//         None => print!("no value")
//     }
// }














// struct User{
//     username : String,
//     password : String,
// }

// fn main(){
//     let obj = User{
//         username : String::from("nobitakaif"),
//         password : String::from("password")
//     };
//     print(obj);
// }

// // fn print_num<T>(opt : T){ // we can't print directly T type becuase T could be anything that doesn't impleted default 
// //         // Display traits eg -> strcut, rust don't know how to print struct 
// //     println!("{}", opt);
// // }

// fn print<T: std::fmt::Display>(opt : T){
//     println!("{}",opt);
// }









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