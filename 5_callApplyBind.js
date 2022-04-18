// Call

var obj = {name:"Mrinal"};

var greeting = function(a){
    return "Welcome "+this.name+" to "+a;
};

console.log(greeting.call(obj, "Japan"));


// Apply

var obj2 = {name:"Mrinal"};

var greeting2 = function(a){
    return "Welcome "+this.name+" to "+a;
};

// array of arguments to the actual function
var arr = ["Japan"];  
console.log(greeting2.apply(obj2,arr));


//Bind 

var obj3= {name:"Mrinal"};

var greeting3 = function(a){
   return "Welcome "+this.name+" to "+a;
};

//creates a bound function that has same body and parameters 
var bound = greeting3.bind(obj3); 

console.log(bound("Japan")); //call the bound function

// returns output as Welcome Mrinal to Japan