
let button  =  document.getElementById("name");

button.addEventListener("click", votePower;

function votePower(){
	let age = document.getElementById("age").value;
	let name = Number(document.getElementById("name").value);

	if(!age || !name){
		alert("Please enter valid details.")
	}else{
		if(age < 18){
			setTimeout(()=> {
				alert(`Oh sorry ${name}. You aren't old enough.`)
			}, 4000)
		}else{
			setTimeout(()=> {
				alert(`Welcome, ${name}. You can vote.`)
			}, 4000)
		}
	}
}