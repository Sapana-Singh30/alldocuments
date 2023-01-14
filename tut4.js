//Type conversion in and type coerision JS


//number to String
let varName=String(34);
console.log(varName, typeof varName);

let varN=34;
console.log(varName, typeof varName.toString());


//boolean to String
let bool=String(true);
console.log(bool, typeof bool)


let bo=true;
console.log(bool, typeof bool.toString());


//date to string
let date=String(new Date());
console.log(date, typeof date)


//array to String
let arr=[1,2,3,4,5];

console.log(arr, typeof arr)




//string to Number
let str=Number("1234");
console.log(str, typeof str);

let stt=Number("12r45");
console.log(stt, typeof stt);// For this example it will show NAN means not a number means can't covert to number


//boolean to number
let b=Number(true);
console.log(b, typeof b);//If the boolean value is true then it will return 1 and for false it will return 0


//can't convert array to number

//parseInt will convert into number and will return integer value.
let aa=parseInt('34.0987');
console.log(aa, typeof aa);


//parseFloat will convert into number and will return flot value.
let bb=parseFloat('34.0987');
console.log(bb, typeof bb);


//.toFixed function is used to give desimal points like we want till 4 or for desimal number and it will do round of also
let cc=parseFloat('34.0987');
console.log(cc.toFixed(5), typeof cc);






