"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	let elementsNumber = parseInt(prompt('Введіть кількість елементів', '10'))

	// Крок 1. Обчислення результатів

	let array = new Array(elementsNumber).fill(0)

	// крок 2. Виведення результатів

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`${array}`)
	document.write(`</div>`)
}