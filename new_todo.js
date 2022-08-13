// let i = 0;

// function ADD_TODO() {
//     let input = document.querySelector(".Inp").value;
//     let Btn = document.getElementById("Btn");

//     let Selected_div = document.querySelector(".Items");
//     if (input == '') {
//         alert("Hello");
//     }
//     else {  
            
//             Selected_div.innerHTML +=
//                 `
//             <div class="one">
//             <h1>${input}</h1>
//             <br>
//             <button onclick="deleteTODO()">DELETE</button>
//            </div>
    
//             `;
//         	Btn.classList.add("delClass");

            
 
//     }

// }

// function deleteTODO()
// {  
//     // let Selected_Item = document.querySelector(".one");
//     // let i1 = i;
      
//     // Selected_Item.remove();
//     let parent = document.querySelector(".Items");
//     // let child = document.querySelector(".one");
//     parent.removeChild(child);
//     // child.parentNode.removeChild(child)
  
// }


























var button = document.getElementById("btn");
var input = document.getElementById("Inp");
var items = document.querySelector(".Items");

function createListElement() {
	var h1 = document.createElement("h1");
	var div = document.createElement("div");
	var br = document.createElement("br");
	var delButton = document.createElement("button");
	var inpValue = input.value;
	var inp_NewValue = inpValue.toUpperCase();
	div.classList.add("one");
	items.appendChild(div);
	div.append(h1,br,delButton);
	// li.classList.add("taskClass");
	h1.appendChild(document.createTextNode(inp_NewValue));
	input.value = "";
	delButton.classList.add("material-symbols-outlined");
	delButton.classList.add("delClass");
	delButton.innerHTML='delete';
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.tagName === "h1"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(newer) {
	if (newer.target.className === "material-symbols-outlined delClass"){
		newer.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	// doneTask(element);
	deleteListElement(element);
}

items.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);