
let button  =  document.getElementById("btn");

button.addEventListener("click", votePower);

function votePower(){
	let age = Number(document.getElementById("age").value);
	let name = document.getElementById("name").value;

	if(!age || !name){
		alert("Please enter valid details");
		return;
	}
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