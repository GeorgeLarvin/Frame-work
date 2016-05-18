(function (global, $){
	
	var GreetR = function (firstname, lastname, language){
		return new GreetR.init(firstname, lastname, language);
	}
	
	GreetR.prototype = {};
	
	GreetR.init = function (firstname, lastname, language) {
		
		var self = this;
		self.firstname = firstname || " ";
		self.lastname = lastname || " ";
		self.language = language || "EN";
	
	}
	
	GreetR.init.prototype = GreetR.prototype;
	
	global.GreetR = global.G$ = GreetR;
	
}(window, jQuery));