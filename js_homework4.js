function checkProbabilityTheory(count) {
  let evenCount = 0; //Лічильник парних чисел
  let oddCount = 0; //Лічильник непарних чисел

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; //Генерація випадкового числа від 100 до 1000, але якщо б ви це не показали на уроці, я б сама не придумала)
    if (randomNumber % 2 === 0) { //Перевіряємо, чи є число парним
      evenCount++; //Якщо число парне, збільшуємо лічильник парних чисел
    } else { 
      oddCount++; //Якщо число непарне, збільшуємо лічильник непарних чисел
    }
  }

  let evenPercent = ((evenCount / count) * 100); //Рахуємо відсоток парних чисел
      evenPercent = evenPercent.toFixed(2); //Робимо округлення до двох знаків після коми
  let oddPercent = ((oddCount / count) * 100); //Рахуємо відсоток непарних чисел
      oddPercent = oddPercent.toFixed(2); //Робимо округлення до двох знаків після коми
  console.log('Кількість згенерованих чисел: ' + count); 
  console.log('Парних чисел: ' + evenCount); 
  console.log('Непарних чисел: ' + oddCount); 
  console.log('Відсоток парних до непарних: ' + evenPercent +'%/'+ oddPercent + '%'); 
}

checkProbabilityTheory(1000); 

//Вариант, в якому можна вказати діапазон чисел для генерації
function checkProbabilityTheory(max, min) {
  let evenCount = 0; //Лічильник парних чисел
  let oddCount = 0; //Лічильник непарних чисел
  let count = (max-min)+1; //Кількість чисел у вказаному діапазоні

  for (let i = 0; i <count; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; //Генерація випадкового числа у вказаному діапазоні
    if (randomNumber % 2 === 0) { //Перевіряємо, чи є число парним
      evenCount++; //Якщо число парне, збільшуємо лічильник парних чисел
    } else {
      oddCount++; //Якщо число непарне, збільшуємо лічильник непарних чисел
    }
  }

  let evenPercent = ((evenCount / count) * 100); //Рахуємо відсоток парних чисел
      evenPercent = evenPercent.toFixed(2); //Робимо округлення до двох знаків після коми
  let oddPercent = ((oddCount / count) * 100); //Рахуємо відсоток непарних чисел
      oddPercent = oddPercent.toFixed(2); //Робимо округлення до двох знаків після коми
  console.log('Кількість згенерованих чисел: ' + count); 
  console.log('Парних чисел: ' + evenCount); 
  console.log('Непарних чисел: ' + oddCount); 
  console.log('Відсоток парних до непарних: ' + evenPercent +'%/'+ oddPercent + '%');
}

checkProbabilityTheory(10, 5); 
