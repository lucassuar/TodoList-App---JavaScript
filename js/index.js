// ADD ITEM, REMOVE ITEM - FUNCIONALITY _________________________________________________
const btn = document.getElementById('btn');
const ulList = document.getElementById('list');

// Button event listener with adding li elemnts with input value
btn.addEventListener('click', function(){
	var input = document.getElementById('input').value; // Capture input value
	if (input == "") {
		alert("Input needed!!");
	} else {
		var newItem = document.createElement("LI");     // Create a <li> node
		newItem.innerHTML = input  // Add content to li element for todo.                 
		newItem.appendChild(createCheckbox());
		newItem.appendChild(createDeleteX());
		newItem.contentEditable = "true";
		ulList.insertBefore(newItem, ulList.childNodes[0]);  // Insert <li> before the first child of <ul>
	}

})

// CREATE CHECKBOX AND MARK DONE TODO  - FUNCIONALITY _________________________________________________

function createCheckbox() {
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'checkboxes';
	checkbox.addEventListener('change', function () {
	  if (checkbox.checked) {
		checkbox.parentNode.classList.add('line-through');
	  } else {
		checkbox.parentNode.classList.remove('line-through');
	  }
	});
	
	return checkbox;
  }

  // CREATE SINGLE TODO DELETE X and DELETE ITEM - FUNCIONALITY _________________________________________________

  function createDeleteX() {
	const deleteX = document.createElement('p');
	deleteX.className = 'delet';
	deleteX.innerText = 'x';
	deleteX.addEventListener('click', function () {
		this.parentNode.remove(this);
	});
	
	return deleteX;
  }



// REMOVE ITEM - FUNCIONALITY _________________________________________________

const clearBtn = document.getElementById('btnClr');

clearBtn.addEventListener('click', function(){
	var listItem = ulList.getElementsByTagName("li");
           while(listItem.length > 0){                   
			ulList.removeChild(listItem[0]);
           }
})