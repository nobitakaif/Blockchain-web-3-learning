

fn main(){
    // let a:u32 = sum(1,3);
    let _str = "nobitakaif"; // use _ underscore of unused variable 

    let _str2 : String = String::from("nobita");
    let vec : Vec<u32> = vec![12,3,4]; // for printing vec use println!("{:?},vec");
    println!("{:?}",vec);
    if vec[0] == 12{
        println!("alright ");
    }else{
        println!("not right");
    }
    // add();

    let name : String = String::from("kaif");
    let size :usize = add_str(&name);
    println!("{}",size);
    println!("{}",name); // we cannot use this variable again because we give ownership to s variable in args of add_str(s), ane when the add_str deallocated from the heam memory and it does give back ownership back becasue we didn't write the function like that and ownership rules says one variable might have only one onwnership at a time if you want to get back the ownership then you have to implicitly return the ownership like add_str(s:String) ->(usize,String){ return (s.len(),s); } something like that
} 

// u8 (positive number only), u16, u32, u64, i8(negatvie number), i32.......

fn _sum(a : u32, b : u32)->u32{
    return a + b;
}

fn _add() {
    for i in 0..99{
        println!("{}",i);
    }
}

// in rust everything is immutable bydefault you have to implicitly define it for mutable variable let mut a = 5; a =10

fn add_str(s: &String)->usize{
    return s.len();
}