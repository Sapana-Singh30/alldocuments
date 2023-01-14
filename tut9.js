//Functions in java

function greet(name, thank = 'Thanks a lot') {
    console.log(`Happy Birthday ${name} Wishing you a beautiful day with happiness and good health forever! Happy Birthday!`);
}

// if we give some value to the parameter then when we missed in our calling function it will returnn default value
let name = 'Dhruva';

greet(name, 'Thank you');


//We can write function within the obj

let obj={
 name : 'Sapna',
 game : function(){     //we can create Anonymous function when it is assigned to a variable.
    return "GTA";
 }
}

console.log(obj.game());


//Var has global scop and let has function level scope
var i = 234;
console.log(i);

function fd(name){
let i=9;
console.log(i);
return `This is ${name}`;
}

console.log(fd("Shiva"),i);


















