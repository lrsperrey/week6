//1
var heading =document.querySelector('div').firstElementChild;
console.log(heading);

//3 & 4
var paragraphs = document.querySelectorAll("p");
//paragraphs = document.classList.add('blue');
console.log(paragraphs);

//5
var div = document.querySelector("div");
var div = document.createElement("p");
var div = document.createTextNode("New Paragraph");
console.log(div);

//6
const hobbies = ['grilling', 'hiking', 'gardening'];
console.log(hobbies);

//7
var ul = document.querySelector('ul');
for (var i = 0; i<=3; i++) {i ='<li>'+ i + '<li>';
}
console.log(ul);

//8
var form = document.querySelector('form');
console.log('form');