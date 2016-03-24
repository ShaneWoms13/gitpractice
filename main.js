//let's build the html elements

//create a div
var content = document.createElement("div");

//place the content div in the body
document.body.appendChild(content);

//put some words inside the content div
content.innerHTML = "hello world";

//increase text size of content
content.style.fontSize = "50px";

//change background
content.style.backgroundColor = "teal";

//half screen width
content.style.width = "50%";

//center the text within the content div
content.style.textAlign = "center";

//center the content div
content.style.margin = "10% auto";
