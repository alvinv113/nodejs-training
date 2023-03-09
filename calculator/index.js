const argvs = process.argv
//console.log(argvs);
const argv= argvs.slice(2)
const myOperation= argv[0]; 

const operator1 = parseInt(argv[1]);
const operator2 = parseInt(argv[2]);
if(myOperation==="add"){
    console.log("The addition of two number "+ ' is '+ (operator1+operator2));
}
if(myOperation==="sub"){
    console.log("The substraction of two number "+ ' is '+ (operator1-operator2));
}
if(myOperation==="mult"){
    console.log("The multiplication of two number "+ ' is '+ (operator1*operator2));
}
if(myOperation==="div"){
    console.log("The division of two number "+ ' is '+ (operator1/operator2));
}
 