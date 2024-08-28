"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const prices = [1005, 20, 280, 3550, 360, 85, 930, 1280, 999, 230, 54]
	const discount = 0.3

	// Крок 1. Обчислення результатів

	prices.forEach((element, index, array) => {
		if (element > 1000) {
			array[index] = element - element * discount
		}
	})

	// крок 2. Виведення результатів

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`<p>${prices}</p>`)
	document.write(`</div>`)
}
