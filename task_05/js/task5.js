"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const numbersArr = [1, 20, -280, 355, -36, 85, -930, 287, -999, 23, -54]

	// Крок 1. Обчислення результатів
	function getProductOfPositiveElements(arr) {
		let product = 1
		for (const el of arr) {
			if (el > 0) product *= el
      }
      return product
	}

	// крок 2. Виведення результатів
	let res = getProductOfPositiveElements(numbersArr)

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`<p>${res}</p>`)
	document.write(`</div>`)
}
