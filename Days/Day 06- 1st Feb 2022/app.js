//var parElem = document.getElementById("app");
//var parent = document.getElementById("exam");
var parElem = document.getElementById("main");

var redColour = document.getElementById("red");
var blueColour = document.getElementById("blue");
var yellowColour = document.getElementById("yellow");
var original = document.getElementById("original");

redColour.addEventListener("click", function () {
  parElem.removeAttribute("class");
  parElem.classList.add("red");
});
blueColour.addEventListener("click", function () {
  parElem.removeAttribute("class");
  parElem.classList.add("blue");
});
yellowColour.addEventListener("click", function () {
  parElem.removeAttribute("class");
  parElem.classList.add("yellow");
});
original.addEventListener("click", function () {
  parElem.removeAttribute("class");
});

console.log(redColour);
console.log(blueColour);
console.log(yellowColour);
/*btn.addEventListener("click", function () {
  alert("click");
});
btn.addEventListener("mouseover", function () {
  parElem.classList.add("newClass");
});
btn.addEventListener("mouseout", function () {
  parElem.classList.add("newClass1");
});

btn.addEventListener("mousedown", function () {
  parent.classList.add("newClass2");
});
btn.addEventListener("mouseup", function () {
  parent.classList.add("newClass3");
});
console.log(btn);


parElem.setAttribute("class", "listname");
console.log(parElem.getAttribute("class"));
console.log(parElem.hasAttribute("class"));
parElem.removeAttribute("class");
console.log(parElem.hasAttribute("class"));

var newElem = document.createElement("li");
newElem.textContent = "Hola";
parElem.replaceChild(newElem, parElem.firstElementChild);

var parent = document.getElementsByClassName("exam");
var newSub = document.createElement("li");
newSub.textContent = "Physics1";
parent.insertBefore(newSub, parent.firstElementChild);
parent.removeChild(parent.lastElementChild);
parent.insertAfter(newSub, parent.lastElementChild);
console.log(newElem);
console.log(newSub);*/
