//Variables in JS


//var,let ,const


//var is a global variable
var name='harry';
console.log(name);

name='Helloharry';
console.log(name);

//if we don't initialize variable then it will show undefined
var ch;
console.log(ch);

//Rules for craeting js variables
/*
1.can't start with numbers
2.can start with letter, _,$
3.variables are case sensitive
*/


//const variable------we can;t over ride const variable value
const varName='Hari Ram';
console.log(varName);

//varName='Hare Krishna'-----In this line we will get error

const arr=[23,54.778,889];
arr.push(67);   //it is valid
console.log(arr);


//arr=[23,45,98];-------reassignment is not valid




//let is a block variable
{

let name='Ramu';
console.log(name);

}

console.log(name);



/* Most common programming case types:

1.camelCase
2.kebab-case
3.snake_case
4.PascleCase

*/ 