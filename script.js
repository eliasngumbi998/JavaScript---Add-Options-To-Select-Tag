function submitData(){
	var data = document.getElementById('select').value;
 
	if(data==""){
		alert('Please select an item first');
	}else{
		alert('You select '+data+'');
	}
}
 
function createOption(){
	var select = document.getElementById('select');
	var option = document.getElementById('option');
 
	if(option.value == ""){
		alert("Please enter something first!");
	}else{
		var newOption = document.createElement("option");
		var newOptionValue = document.createTextNode(option.value);
 
		newOption.appendChild(newOptionValue);
		select.insertBefore(newOption, select.lastChildNode);
 
		option.value = "";
		select.value = "";
	}
}
