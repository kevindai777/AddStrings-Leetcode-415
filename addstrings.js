//Objective is to add two strings of integers together without using 'BigInt'
//or similar methods.

let num1 = '121'
let num2 = '356'


//O(n) solution that works from the back of both strings, adds the digits,
//and adds them together.

let p1 = num1.length - 1
let p2 = num2.length - 1
let carry = 0
let result = ''
    
while (p1 >= 0 || p2 >= 0) {
    let a = (p1 >= 0) ? num1[p1--] - '0' : 0
    let b = (p2 >= 0) ? num2[p2--] - '0' : 0
    let sum = (a + b + carry) % 10
    carry = Math.floor((a + b + carry) / 10)
        
    result += sum
}
    
if (carry > 0) {
    result += carry
}
    
result.split('').reverse().join('')