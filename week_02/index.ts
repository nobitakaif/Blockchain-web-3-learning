// it will converth "hello" into array of bytes[104,101,108,111,103] 
const binaryRepresenting = new TextEncoder().encode("hello") 

console.log(binaryRepresenting)
console.log(typeof(binaryRepresenting))
const a = [104]
console.log(typeof(a))


// hexa take only 4 bit from 0 to f which i make the all bit 1111 => 15 == f

// base64 take 6 bit from the byte it has value A-Z, a-z, 0-9, "+" , "/" if i add all this it's total count is 64
