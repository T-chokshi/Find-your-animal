
var randomNumber = Math.floor(Math.random()*6)+1;

var randomImage = "images/animal" +randomNumber + ".jpeg";

var image1 = document.querySelectorAll(".photo")[0];

image1.setAttribute("src",randomImage);
