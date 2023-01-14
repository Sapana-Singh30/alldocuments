console.log('This is String and String functions tutorial');

const name='Harry is a good boy';
const greeting= 'Good Morning';

//Concatination of two strings
console.log( greeting + ' ' + name);
console.log(greeting.concat(name));

//String functions
console.log(name.length);                //to calculate the length of string
console.log(name.toLowerCase());        //to convert string into lower case
console.log(name.toUpperCase());       //to convert string into upper case
console.log(name[0]);                 //to find character at 0 index
console.log(name.indexOf('Ha'));                 //to find index of given string or character ...it always return first occurence of character
console.log(name.lastIndexOf('H'));             //it will return index from last
console.log(name.charAt(2));                   //it will return character at given index
console.log(name.endsWith('boy'));            //it will check that is given string is ending with given substring or not
console.log(name.includes('goo'));           //it will check whether the string includes the given substring or not
console.log(name.substring(0,4));           //it will return substring of given index first index will be included last wont be included
console.log(name.slice(-4));               //It will return substring from last
console.log(name.split(' '));             //It will split the string as array from mentioned character
console.log(name.replace('is','was'));   //Always replace first occurence of previous word with new one



//Template literals
//By using template literls we can write HTML within this and along with this we can use any symbole with back ticks.
const n='Harry';
let fruit1 ='Orange';
let fruit2 = 'Apple';
let html=`Hello ${n}                   
          <h1> This is heading</h1>
          <p> you like ${fruit1} and ${fruit2}
`;

document.body.innerHTML = html;


