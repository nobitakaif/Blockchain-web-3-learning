trait Summary{ // difing the traits
    fn summarize(&self) ->String{ // this is default function if summarize() doesn't exist in impl the it will execute otherwise don't
        return String::from("alright from summarize");
    }
}

trait Fix{
    fn fix(&self) -> String{
        return String::from("alright from fix");
    }
}
struct User{
    name : String,
    age : u32
}

impl Summary for User{
    // fn summarize(&self) ->String{ 
    //     return format!("The  name of the user is {}, and the age is {}", self.name, self.age);
    // }
}

impl Fix for User {}

struct SecondUser{
    username : String,
}

trait PrintUser{
    fn print(&self) -> String{
        return String::from("something happens wrong maybe, that's why default one is executed");
    }
}

impl PrintUser for SecondUser{
    // fn print(&self)->String{
    //     return format!("name of the second user is {}",self.username);
    // }
}

fn main() {
    let user = User{
        name : String::from("nobita"),
        age : 32
    };

    let second_user = SecondUser{
        username : String::from("kaif"),
    };

    print_display(second_user);
    // println!("{}",user.summarize());
    notify(user);
}

fn print_display<T: PrintUser>(str : T){
    println!("{}",str.print());
}

fn notify<T : Summary + Fix>(u : T){ // now we use fix() and summarize() because Summary and Fix implementation abstract User struct  
    println!("{}",u.summarize());
    println!("{}",u.fix());
}