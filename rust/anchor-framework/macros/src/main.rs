
#[derive(Debug)]
struct Rect<'a>{
    width : u32,
    height : u32,
    name : &'a String,
}

impl Rect<'_>{
    fn printing(&self)-> String{
        format!("this is printin struct using own macrors {}, {}, {}", self.height, self.width, self.name)
    }
}

fn main() {
    let str = String::from("nobitakaif");
    let r;
    {
        
        r = Rect{
            width : 32,
            height : 54,
            name : &str
        }
    }
    println!("Hello, world! {}",r.printing());
}
