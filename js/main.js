window.onload = function () {
		console.log(localStorage.getItem('testKey'));
	// body...
	var todobtn = document.getElementById('finishbtn');
	todobtn.addEventListener("click",function() {
		let testobj = {
			name:'name',
			content:'content',
			time:1,
		}
		console.log(testobj);
		localStorage.setItem("testKey",testobj);
		var o = localStorage.getItem('testKey');
		console.log("todobtn");
		console.log(o);
	})
}
// document.ready(function (argument) {
// 	console.log('124')
// })
// console.log("123");