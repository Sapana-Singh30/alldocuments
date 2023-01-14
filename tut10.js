//From tut 10 we are including in.html


console.log("This is DOM tutorial");

let a = document;
a = document.all; // we can not traverse this using foreach because its not an array

//this is not a right syntax to traverse an object
/*a.forEach(function(element){
    console.log(element);
})*/


//We can do it using following
/*Array.from(a).forEach(function(element){
    console.log(element);
})*/

a = document.body;
a = document.forms;
a = document.links;



console.log(a);