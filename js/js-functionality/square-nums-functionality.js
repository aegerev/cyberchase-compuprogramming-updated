const generateNumbersBtn = document.getElementById('generateNumbers');
const numbersList = document.getElementById('numbersList');
const squareBtn = document.getElementById('squareTheNumbers');
const squareResult = document.getElementById('squaredNumbers');
squareResult.classList.add('result');


function generateRandomNumbers() {
	const randomNumbers = [];
	const numbersLength = Math.floor(Math.random() * 5) + 5;
	for(let i = 0; i < numbersLength; i++) {
		randomNumbers.push(Math.floor(Math.random() * 10) + 1);
	}
	return randomNumbers;
}


function displayResult(element, message, result) {
	element.textContent = `${message}: ${result}`;
}

document.addEventListener('DOMContentLoaded', function() {
	let generatedNumbers = [];

	generateNumbersBtn.addEventListener('click', function() {
		generatedNumbers = generateRandomNumbers();
		displayResult(numbersList, 'Generated Numbers', generatedNumbers.join(", "))
	});

  squareBtn.addEventListener('click', function() {
		const result = typeof squareNumbers !== 'undefined' ? (generatedNumbers.length === 0 ? generatedNumbers : squareNumbers(generatedNumbers)) : generatedNumbers;
		displayResult(squareResult, "Squared numbers", result.join(", "));
	});
});