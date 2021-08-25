require.config({
	baseUrl:'.',
	paths:{
		jquery: 'libs/jquery-3.3.1',
		//Adding path to a folder is possible, while using it needs to be written as 'libpath/jquery'
		libpath: 'libs'
		//URL paths can also be added.
	}

})

require(['demo', 'jqueryScript', 'mathUtils', 'random', 'settings'], function(a, meth, mObj, randomFunc, obj){

	$(document).ready(function(){
		$("#btn1").click(function(){
			$('#res').text(randomFunc());
		});
	});
	
/* 	a();

	meth.updateHTML("Asynchronous Module Definition")

	console.log("10+20 : ", mObj.add(10,20));
	console.log("10-20 : ", mObj.subtract(10,20));
	console.log("10*20 : ", mObj.multiply(10,20));

	console.log("Random:",randomFunc());

	console.log(obj.downloadUrl); */
})