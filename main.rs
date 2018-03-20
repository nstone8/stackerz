fn main(){}

#[no_mangle]
pub extern "C" fn the_answer() -> i32{
    println!("Hello, Webassembly");
    return 42
}
