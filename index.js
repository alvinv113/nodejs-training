const prompt = require('prompt-sync')();
const events = require("events");
const { eventEmitter }= require("./emitter.js")





const validation=()=>{
    const numOne = prompt("Enter First Number ")
    if(isNaN(Number(numOne)) || numOne.includes(' ')){
        return console.log("Please enter correct number1");
    }
    const numTwo = prompt("Enter Second  Number ")
    if(isNaN (Number(numTwo)) || numTwo.includes(' ')){
        return console.log("Please enter correct number2");
    }
    const opt = prompt("Enter the operation (add, sub, multi, divide) ");
    if(opt=="add"|| opt=="sub"|| opt=="multi"|| opt== "divide" ){
        return eventEmitter.emit(opt, numOne, numTwo) ;
    }
    return console.log("Enter valid operator");
}

validation();