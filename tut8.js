//Loops in JS


//For loop
/*for(let i=1;i<10;i++)
{
    console.log(i);
}

//While loop
let j=0;
while(j<10){
    console.log(j);
    j++;
}

//Do while loop
let k=0;
do{
    console.log(k);
    k++;
}
while(k<5);


//break is use to exit the loop at given condition
let l=0;
while(l<10){
    console.log(l);
    if(l===6){
        break;
    }
    l++;
}
*/

//Continue is used to skip one iteration 
let m=0;
while(m<10){
    
    if(m==6){
        m++;
        continue;
    }
    console.log(m);
    m++;
}

//Iteration of array
let arr=[1,4,7,8,9];
arr.forEach(function(element){
    console.log(element);
})


//Object Iteration
let obj = {
    name: "Sapna",
    age: 78,
    type: "FrontEnd developer",
    os: "ubuntu"
}

for(let key in obj)
{
console.log(`The ${key} of object is ${obj[key]}`);
}





















