const generateNumbersBtn = document.getElementById('generateNumbers');
const sumNumbersBtn = document.getElementById('sum-numbers');
const numbersList = document.getElementById('numbersList');
const sumResult = document.getElementById('sumResult');
sumResult.classList.add('result');

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

	sumNumbersBtn.addEventListener('click', function() {
		const result = typeof sumNumbers !== 'undefined' ? (generatedNumbers.length === 0 ? 0 : sumNumbers(generatedNumbers)) : 0;
		displayResult(sumResult, "Sum of numbers", result);
	});

});