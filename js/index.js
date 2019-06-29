// ADD ITEM - FUNCIONALITY _________________________________________________
const btn = document.getElementById('btn');
const ulList = document.getElementById('list');

// Button event listener with adding li elemnts with input value
btn.addEventListener('click', function(){
	var input = document.getElementById('input').value; // Capture input value
	var newItem = document.createElement("LI");     // Create a <li> node
	newItem.innerHTML = input + '<input type="checkbox" class="checkboxes"><p class="delet" >x</p>';  // Add content to li element for todo.                   
	ulList.insertBefore(newItem, ulList.childNodes[0]);  // Insert <li> before the first child of <ul>
	// input = ' ';  // Reset input value to empty field
})


// REMOVE ITEM - FUNCIONALITY _________________________________________________

// Individual deletes - STUCK WITH THIS BELOW

if(document.getElementsByClassName('delet') != null){
	var delet = document.getElementsByClassName('delet').innerText;
	console.log('delet detected: ' + delet); 
} else { console.log('null'); }

if(delet){
	console.log(delet + 'epa'); 
  }

  function deleteTodo() {
	console.log('qUE pasa'); }

if(delet){
	delet.addEventListener('click', deleteTodo);
  }

