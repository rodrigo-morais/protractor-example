var Calc = (function() {
	var _sum = function(event) {
		event.preventDefault();

		var number1 = parseInt(document.getElementById('num1').value),
			number2 = parseInt(document.getElementById('num2').value),
			result = document.getElementById("result");

		result.innerHTML = number1 + number2;
	}

	var _product = function(event) {
		event.preventDefault();

		var number1 = parseInt(document.getElementById('num1').value),
			number2 = parseInt(document.getElementById('num2').value),
			result = document.getElementById("result");

		result.innerHTML = number1 + number2;
	}	

	return {
		sum: _sum,
		product: _product
	}
});

var calc = Calc();
