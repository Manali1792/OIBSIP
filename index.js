function add(){
	document.getElementById('sp').innerHTML="";
	let name=document.getElementById('task').value;
	if(name==''){
		alert("Cannot be empty");
	}
	else{
		let box=document.getElementById('taskslist');
		let li=document.createElement('li');
		li.textContent=name;
		let a=document.createElement('button');
		a.textContent="Delete";
		a.href="javascript:void(0)";
		a.className="remove";
		li.appendChild(a);
		let pos=box.firstElementChild;
		if(pos==null){
			box.appendChild(li);
		}
		else{
			box.insertBefore(li,pos);
		}

	}
	document.getElementById('task').value='';
}
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
	let box=document.getElementById('taskslist');
	let li=e.target.parentNode;
	box.removeChild(li);
	});

