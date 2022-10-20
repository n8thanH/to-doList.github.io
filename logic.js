// Logic for the To-Do List               #5d545d
const addEl = document.getElementById('add');
const list = document.getElementById('list');

// Using Mouse Hover to change the color of the add div
addEl.onmouseover = () => document.getElementById('add').style.backgroundColor = "#2C2C34";
addEl.onmouseout = () => document.getElementById('add').style.backgroundColor = "#494850";

// Adding a New Div to the DOM
addEl.onclick = () => addAnElement(prompt("Enter To-Do list Entry"));

function addAnElement(text) {
    // Creates the new Div
    const newDiv = document.createElement("div");
    newDiv.className = "listItem";

    // Creates the buttons and the list item name
    const delButton = document.createElement("button");
    const editButton = document.createElement("button");
    const newItem = document.createElement("p");
    newItem.className= "listP";

    // Creates the new text for the div and buttons
    const delText = document.createTextNode("Delete");
    const editText = document.createTextNode("Edit");

    // Adding the text nodes to the things
    newItem.innerHTML = text;
    delButton.appendChild(delText);
    editButton.appendChild(editText);

    // Assigning a class name to the buttons
    delButton.className= "delete";
    editButton.className= "edit";

    // Making the Delete button work
    delButton.onclick = () => list.removeChild(newDiv);
    editButton.onclick = () => newText(newItem, text);

    // Adds the new text and buttons to the div
    newDiv.appendChild(newItem);
    newDiv.appendChild(delButton);
    newDiv.appendChild(editButton);

    // Inserts the Div into the DOM Tree and on to the Web Page
    list.appendChild(newDiv);
}

function newText(newItem, text) {
    // Changing the name of the item
    const newText = prompt("Edit:", text);
    newItem.innerHTML = newText;
}    