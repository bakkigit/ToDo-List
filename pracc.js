let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer")
let inputField = document.getElementById("inputfield")

addToDoButton.addEventListener("click",function(){
var paragraph = document.createElement("p")
paragraph.classList.add('paragraph-styling')
paragraph.innerText = inputField.value;
toDoContainer.appendChild(paragraph);
inputField.value = "";
paragraph.addEventListener("click",function(){
    // Den her for at slette paragraph.innerText = ""; ellers
    paragraph.style.textDecoration = "line-through";

})
paragraph.addEventListener("dblclick",function(){
    paragraph.innerText = "";
    //Eller toDoContainer.removeChild(paragraph); 

})
})