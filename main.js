// Dan's custom JS will go here 

var addButton = document.getElementById("add-button");
addButton.addEventListener("click",addToDoItem);

function addToDoItem(){
    alert("Add button clicked!");
}


var clearButton = document.getElementById("clear-completed-button");
addButton.addEventListener("click",ClearCompletedToDoItems);

function ClearCompletedToDoItems(){
    alert("Cleared Completed Items!");
}


var emptyButton = document.getElementById("empty-button");
addButton.addEventListener("click",emptyList);

function emptyList(){
    alert("Emptied Items");
}


var saveButton = document.getElementById("save-button");
addButton.addEventListener("click",saveList);

function addToDoItem(){
    alert("Saved items!");
}