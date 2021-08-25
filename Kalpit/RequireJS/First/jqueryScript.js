define(['jquery'], function($){

	var methods = {};

	methods.updateHTML= function(args){
		$('body').html(args);
	};

	return methods;
});

