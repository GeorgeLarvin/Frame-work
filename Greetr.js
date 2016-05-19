
(function (global, $){
	
	var GreetR = function (firstname, lastname, language){
		return new GreetR.init(firstname, lastname, language);
	}
	
	var supportedLangs = ["En", "Es"];
	
	var greeting = {
		En: "Hello",
		Es: "Hola"
	};
	
	var formalGreetings = {
		En: "Greetings",
		Es: "Saludos"
	};
	
	var logMessages = {
		En: "Logged in",
		Es: "Conectado sesión"
	};
	
	GreetR.prototype = {
		
		fullName: function (){
			return this.firstname + " " + this.lastname;
		},
		
		validate: function (){
			if	(supportedLangs.indexOf(this.language)=== -1){
				throw "Invalid Language, not supported yet !";
			}
		},
		
		greeting: function (){
			return greeting[this.language] + " " + this.firstname; 
		}, 
		
		formalGreetings: function () {
			return formalGreetings[this.language] + " " + this.fullName(); 
		},
		
		   greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreetings();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
		
			log: function (){
				if(console){
					console.log(logMessages[this.language] + ":" + this.fullName());
				}
					return this;
			},
			
			setLang: function (Lang){
				this.language = Lang;
				this.validate();
				return this;
			},
			
			//jQuery Method
			HTMLGreeting function (selector, formal){
				if(!$){
					throw "Jquery isnt plugged in 1";
				}
				if(!selector){
					throw "Missing Jquery selector";
				}
				
				var msg:
					if (formal){
					msg = this.formalGreetings();
				}
				else {
					msg = this.greeting();
				}
				
				$(selector).html(msg);
				
				return this.
				
			}
			
	};
	
	GreetR.init = function (firstname, lastname, language) {
		
		var self = this;
		self.firstname = firstname || " ";
		self.lastname = lastname || " ";
		self.language = language || "En";
	
	}
	
	GreetR.init.prototype = GreetR.prototype;
	
	global.GreetR = global.G$ = GreetR;
	
}(window, jQuery));






