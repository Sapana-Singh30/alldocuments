//The task is that we have to find all the links which includes the given string




console.log("This is First exercise");



let a = document.links;
Array.from(a).forEach(function(element){
let bo = element.href;
b = bo.includes("google");

if(b){
    console.log(bo);
}



})

