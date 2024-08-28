"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const numbersArr = [1, 20, 280, 355, 36, 85, 930, 287, 999, 23, 54]

	// Крок 1. Обчислення результатів

	

	// крок 2. Виведення результатів

	document.write(`<div class="container" style="text-align:center">`)
	for (const el of numbersArr) {
		if (el > 100) document.write(`<p>${el}</p><br>`)
	}
	document.write(`</div>`)
}