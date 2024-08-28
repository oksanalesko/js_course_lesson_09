"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

   const numbersArr = [1, 20, -280, 355, -36, 85, -930, 287, -999, 23, -54]
   const firstElement = numbersArr[0]

	// Крок 1. Обчислення результатів

   numbersArr.forEach((element, index, array) => element > firstElement ? array[index] = element * 2 : element)

	// крок 2. Виведення результатів

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`<p>${numbersArr}</p>`)
	document.write(`</div>`)
}
