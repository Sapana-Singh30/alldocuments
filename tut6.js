//Array and its methods
//*after applying array methods its change the actual array not only return the value for that time only


let marks = [12, 34, 56, 76, 80];
const fruits = ['Orange', 'apple', 'banana'];
const mixed = ['str', 67 , [23,76,23]];
const marks2 = [43, 87, 98];


const  arr = new Array(23,45,98, 'sart');
console.log(arr);

//properties of arrays
console.log(arr.length);  //Since length is the property of string that's why we are not using ().
console.log(Array.isArray(fruits));
arr[0]='Harry';
console.log(arr);


let value= marks.indexOf(56);
console.log(value);

//Mutating and modifying arrays
 //It will push new element in array at last index
marks.push(678);  
console.log(marks);


//to inset element at first index of array
marks.unshift(897);
console.log(marks);

//to delate last element of array
marks.pop();
console.log(marks);

//to delate first element of array
marks.shift();
console.log(marks);

//to delate element  from given index of array
marks.splice(2,3);    /*first number is to show index number from where element
                      have to be deleted and the second number is showing the number of 
                        elements we have to delete.*/
console.log(marks);


//to reverse the array
marks.reverse();
console.log(marks);


//to concat two arrays
marks = marks.concat(marks2);
console.log(marks);



//Objects in JS

let myobj={
       name: 'Sapna',
       channel: 'DreamCentric',
       isActive: true,
       marks: [1,2,3,4,5]
    }

console.log(myobj);            //Print object
console.log(myobj.name);      //to access elements of object
console.log(myobj['name']);  //to access elements of object









