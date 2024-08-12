const generateNumbersBtn = document.getElementById('generateNumbers');
const numbersList = document.getElementById('numbersList');
const filterEvenBtn = document.getElementById('filterEven');
const filterEvenResult = document.getElementById('filteredNumbers');
filterEvenResult.classList.add('result');

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

	filterEvenBtn.addEventListener('click', function() {
		const result = typeof filterEvenNumbers !== 'undefined' ? (generatedNumbers.length === 0 ? [1] : filterEvenNumbers(generatedNumbers)) : [1];
		displayResult(filterEvenResult, "Even numbers", result.join(", "));
	});
});