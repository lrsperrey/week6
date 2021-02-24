//1. Get the element node (html element, html entity) of the element with the id of "navbar" assign it to the variable navbar
var navBar =document.getElementById('navbar');
console.log(navBar);

//2.  Get the element node (html element, html entity) of the element with the id of "showcase" assign it to the variable showcase
var showCase =document.getElementById('showcase');
console.log(showCase);

//3. Get the element node (html element, html entity) of the element with the id of "footer" assign it to the variable footer
var footer = document.getElementById('footer');
console.log(footer);

//4.  Get the node list of the footer variable, assign it to the variable footerNodes. Notice how you get back three text nodes around, one comment node, and one element node specifically a paragraph
var footerNodes = document.querySelectorAll("#footer");
console.log(footerNodes);

//5. Get an HTML collection of the footer variable, assign it to the variable footerChildren. Notice how we only get back the paragraph (element node) back and not the comments or text nodes like we got with the node list
var footerChildren =document.getElementsByTagName('footer');
console.log(footerChildren);

//6. Get all elements with the class of "nav-link" and store them in a variable named navLinks
var navLinks = document.getElementsByClassName('nav-link');
console.log(navLinks);

//7. Get the ul and store it in a variable named ul HINT: you'll want to use querySelector() || getElementsByTagName. querySelector will be easier to use in this instance
var ul = document.querySelector('#navbar');
console.log(ul);

//8. Using the ul variable chain together method and properties of the ul object to get the "About" <li>, store it in the variable aboutLi. TIP: You need to make the children of <ul> an array like structure from there try to get the specific index you desire NOTE: Depending on if you use .childNodes || .children your index number may be different
var aboutLi = document.querySelector('#navbar').children[0].children[1];
console.log(aboutLi);