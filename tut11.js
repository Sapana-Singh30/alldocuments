console.log('This is HTML Selector tutorial');

//two types of element selectors are there in JS
//Single element selector
let element = document.getElementById('newchild');
//element = element.childNodes;
//element = element.className;
//element = element.parentNode;
element.style.color = 'red';
element.innerText = 'My name is Shiva';            // to change text of elemt
element.innerHTML = '<b>I love My India.</b>';      //to give html to text
console.log(element);



//Single element selector by query selector
let sel = document.querySelector('#heading');
sel = document.querySelector('.child');         //it will give first element of child class
sel = document.querySelector('div');       //first element of div  will be shown 
sel.style.color = 'green';
console.log(sel);



//Multi Element selector
let elms = document.getElementsByClassName('child');
elms = document.getElementsByClassName('container');
elms = document.getElementsByTagName('div');
console.log(elms);


//console.log(elms[0].getElementsByClassName('child'));


