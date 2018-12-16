var output = [];
var n = 1;

function printNumbers(){
	
	while (n<=100) { 

	if (n%5 === 0 && n%3 === 0) {
		output.push("FizzBuzz");
		
	} else if (n%3 === 0) {
		output.push("Fizz");
		
	} else if (n%5 === 0) {
		output.push("Buzz");
		
	} else {
		output.push(n);	
	}
	
	n += 1;  
	}
	
	document.getElementById("results").innerHTML = output;
	document.getElementById('results').setAttribute("style","color:gray");
	
	
	
}