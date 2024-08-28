"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const carNumbers = ["AB1234CD", "EX5678KL", "KM3456OP", "CT7890AM", "TX1234BC", "HO5678CE", "AB3456DE", "MN7890KL", "RS1234OP", "CE5678TX", "AT3456MN", "KH7890OP"]

   const firstLetter = 'A'
   let carsNumbersA = []

	// Крок 1. Обчислення результатів

	carNumbers.forEach(element => {
		if (element[0] === firstLetter) carsNumbersA.push(element)
	})

	// крок 2. Виведення результатів

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`<p>${carsNumbersA}</p>`)
	document.write(`</div>`)
}
