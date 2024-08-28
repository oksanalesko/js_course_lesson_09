"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const elementsNumber = parseInt(prompt('Введіть кількість елементів', '10'))

	// Крок 1. Обчислення результатів

	let array = new Array(elementsNumber).fill(1)
	array.fill(7, Math.floor(elementsNumber / 2))

	// крок 2. Виведення результатів

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`${array}`)
	document.write(`</div>`)
}