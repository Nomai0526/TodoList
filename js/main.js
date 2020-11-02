class Item {
	constructor(date,title,content){
		this.date = date;
		this.title = title;
		this.content = content;
	}
}



function contentflash() {
	const contentbody = document.getElementById('contentbody');
	for (let i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i);
			let item = localStorage.getItem(key); 
		}	
}


window.onload = function () {

	let item = new Item(new Date(),'title1','content1');
	localStorage.setItem(JSON.stringify(item));

	// 	console.log(localStorage.getItem('testKey'));
	// // body...
	// var todobtn = document.getElementById('finishbtn');
	// var addItemBtn = document.getElementById('additem');
	// addItemBtn.addEventListener('click',function function_name(argument) {
	// 	// body...
	// })	
	// todobtn.addEventListener("click",function() {
	// 	let testobj = {
	// 		name:'name',
	// 		content:'content',
	// 		time:1,
	// 	}
	// 	console.log(testobj);
	// 	localStorage.setItem("testKey",testobj);
	// 	var o = localStorage.getItem('testKey');
	// 	console.log("todobtn");
	// 	console.log(o);
	// })
	// localStorage.clear();

	let contentbody = document.getElementById('contentbody');
	let time1 = new Date();
	let itemtimes = [time1,time1];
	let itemtitles = ['title1'];
	let itemcontents = ['content1'];
	for (let i = 0; i < itemtimes.length; i++) {
		console.log(itemtimes[i].getDay());
		contentbody.innerHTML = contentbody.innerHTML + '<div class="timestamp">'+itemtimes[i].getFullYear()+'年'+(itemtimes[i].getMonth()+1)+'月'+itemtimes[i].getDate()+'日</div>' 
		console.log("added");
	} 

	var additemBtn = document.getElementById('additem');
	const confirmBtn = document.getElementById('confirmbtn');
	const cancalBtn = document.getElementById('cancalbtn');

	console.log(additemBtn);

	additemBtn.addEventListener('click',function(){
		document.getElementById('additemwindow').style.visibility = 'visible';
		// alert("clicked");
	}); 
	confirmBtn.addEventListener('click',function(){
		document.getElementById('additemwindow').style.visibility = 'hidden';
		contentbody.innerHTML = contentbody.innerHTML + '<div class="todoitem"><span class="todologo"><img src="../icon/callicon.png" class="todoicon"></span><span class="todocontent"><div class="todotitle">摸鱼</div><div class="todoinfo">摸好几只鱼</div><div class="todotime">1919.8.10</div></span><span class="todobtn"><div id="finishbtn">完成</div><div id="editbtn">删除</div></span></div>';
	}); 
	cancalBtn.addEventListener('click',function(){
		document.getElementById('additemwindow').style.visibility = 'hidden';
		// alert("clicked");
	}); 





}
// document.ready(function (argument) {
// 	console.log('124')
// })
// console.log("123");