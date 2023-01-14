console.log("This is traversing of DOM tutorial");


let cont= document.querySelector('.container');
console.log(cont.childNodes); //it will give all the children including  space as text and comments
console.log(cont.children);    //it will only return html elements

let nodeName = cont.childNodes[0].nodeName;
let nodetype = cont.childNodes[0].nodeType;
console.log(nodeName);
console.log(nodetype);  

/*Nodes Type

1.Elements
2.Attributes
3.Text nodes
8.Comment
9.document
10. Doctype




*/
