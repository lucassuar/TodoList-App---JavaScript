// ADD ITEM - FUNCIONALITY _________________________________________________
const btn = document.getElementById('btn');
const ulList = document.getElementById('list');

// Button event listener with adding li elemnts with input value
btn.addEventListener('click', function(){
	var input = document.getElementById('input').value; // Capture input value
	var newItem = document.createElement("LI");     // Create a <li> node
	newItem.innerHTML = input + '<input type="checkbox" class="checkboxes"><p class="delete-x">x</p>';  // Add content to li element for todo.                   
	ulList.insertBefore(newItem, ulList.childNodes[0]);  // Insert <li> before the first child of <ul>
})


// REMOVE ITEM - FUNCIONALITY _________________________________________________

// Individual deletes
const deletex = document.getElementsByClassName('delete-x');
console.log(deletex)
