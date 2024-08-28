"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const prices = [1005, 20, 280, 3550, 360, 85, 930, 1280, 999, 230, 54]
   const tax = 0.2
   let taxArray = []

	// Крок 1. Обчислення результатів

	prices.forEach(element => taxArray.push(element *= tax))

	// крок 2. Виведення результатів

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`<p>${taxArray}</p>`)
	document.write(`</div>`)
}