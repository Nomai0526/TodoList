window.onload = function () {
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

	const additemBtn = document.getElementById('additem');
	const confirmBtn = document.getElementById('confirmbtn');
	const cancalBtn = document.getElementById('cancalbtn');


	additemBtn.addEventListener('click',function(){
		document.getElementById('additemwindow').style.visibility = 'visible';
		// alert("clicked");
	}); 
	confirmBtn.addEventListener('click',function(){
		document.getElementById('additemwindow').style.visibility = 'hidden';
		// alert("clicked");
	}); 
	cancalBtn.addEventListener('click',function(){
		document.getElementById('additemwindow').style.visibility = 'hidden';
		// alert("clicked");
	}); 



	let content = document.getElementById('maincontent');
	let time1 = new Date();
	let itemtimes = [time1];
	let itemtitles = ['title1'];
	let itemcontents = ['content1'];
	for (let i = 0; i < itemtimes.length; i++) {
		content.innerHTML = content.innerHTML + '<div class="timestamp">2020年10月24日</div>' 
		console.log("added");
	} 

}
// document.ready(function (argument) {
// 	console.log('124')
// })
// console.log("123");