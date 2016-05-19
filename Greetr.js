
(function (global, $){
	
	//"New" an object
	var GreetR = function (firstname, lastname, language){
		return new GreetR.init(firstname, lastname, language);
	}
	
	//Hidden within the scope of the IIFE and not directly accessible
	var supportedLangs = ["En", "Es"];
	
	//informal gretting
	var greeting = {
		En: "Hello",
		Es: "Hola"
	};
	
	//formal greeting
	var formalGreetings = {
		En: "Greetings",
		Es: "Saludos"
	};
	
	//logger messages
	var logMessages = {
		En: "Logged in",
		Es: "Conectado sesión"
	};
	
	// prototype holds methods (to save memory space)
	GreetR.prototype = {
		
		// 'this' refers to the calling object at execution time
		fullName: function (){
			return this.firstname + " " + this.lastname;
		},
		
		validate: function (){
			// check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
			if	(supportedLangs.indexOf(this.language)=== -1){
				throw "Invalid Language, not supported yet !";
			}
		},
		
		// retrieve messages from object by referring to properties using [] syntax
		greeting: function (){
			return greeting[this.language] + " " + this.firstname; 
		}, 
		
		formalGreetings: function () {
			return formalGreetings[this.language] + " " + this.fullName(); 
		},
		
			// chainable methods return their own containing object
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
					//made chainable
					return this;
			},
			
			setLang: function (Lang){
				//set the lang
				this.language = Lang;
				
				//validate the lang
				this.validate();
				
				//make chainable
				return this;
			},
			
			//jQuery Method
			HTMLGreeting: function (selector, formal){
				if(!$){
					throw "Jquery isnt plugged in 1";
				}
				if(!selector){
					throw "Missing Jquery selector";
				}
				
				//determine the message
				var msg;
					if (formal){
					msg = this.formalGreetings();
				}
				else {
					msg = this.greeting();
				}
				
				// inject the message in the chosen place in the DOM
				$(selector).html(msg);
				
				//make chainable
				return this;
				
			}
			
	};
	
	// the actual object is created here, allowing us to 'new' an object without calling 'new'
	GreetR.init = function (firstname, lastname, language) {
		
		var self = this;
		self.firstname = firstname || " ";
		self.lastname = lastname || " ";
		self.language = language || "En";
	
		self.validate();
	
	}
	
	// trick borrowed from jQuery so we don't have to use the 'new' keyword
	GreetR.init.prototype = GreetR.prototype;
	
	    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
	global.GreetR = global.G$ = GreetR;
	
}(window, jQuery));






