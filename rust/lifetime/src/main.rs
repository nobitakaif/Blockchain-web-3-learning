

fn main(){
    let a = String::from("nobita");
    let b = String::from("kaif");
    let ans = longest(&a, &b);
    println!("{}",ans);
}

fn longest(str1: &str, str2: &str) -> &str{
    if str1.len() > str2.len(){
        return str1;
    }
    else{
        return str2;
    }
}