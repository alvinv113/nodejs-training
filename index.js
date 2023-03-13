const prompt = require('prompt-sync')();
const events = require("events");
const { eventEmitter }= require("./emitter.js")

const numOne = +prompt("Enter First Number ")
const numTwo = +prompt("Enter Second Number ")
const opt = prompt("Enter the operation (add, sub, multi, divide) ");

eventEmitter.emit(opt, numOne, numTwo)