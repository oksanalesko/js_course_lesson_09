"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const names = ["Олександр", "Андрій", "Марія", "Ольга", "Володимир", "Тетяна", "Юрій", "Ірина", "Віктор", "Наталія"]

	let namesFirstLetters = []

	// Крок 1. Обчислення результатів

	names.forEach(element => namesFirstLetters.push(element[0]))

	// крок 2. Виведення результатів

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`<p>${namesFirstLetters}</p>`)
	document.write(`</div>`)
}
