
#[derive(Debug)]
struct User{
    username : String
}


fn main(){
    let a = String::from("nobita");
    let mut ans; 
    {   
            
        let b = String::from("kaif");
        ans = longest(&a, &b);
        println!("{:?}",ans);
    }
    
}

fn longest<'a>(str1: &'a str, str2: &'a str) -> &'a str {
    if str1.len() > str2.len() {
        return str1;
    } else {
        return str2;
    }
}