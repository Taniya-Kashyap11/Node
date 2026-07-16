// const abc=require("./p1_localmodules");
// let x=30;
// let y=10;
// console.log("Addition "+ abc.add(x,y));
// console.log("Subtraction "+ abc.sub(x,y));
// console.log("Division "+ abc.divide(x,y));
// console.log("Multiplication "+ abc.multiply(x,y));

const {add,sub,divide,multiply}=require("./p1_localmodules");
let x=30;
let y=10;
console.log("Addition "+ add(x,y));
console.log("Subtraction "+ sub(x,y));
console.log("Division "+ divide(x,y));
console.log("Multiplication "+ multiply(x,y));