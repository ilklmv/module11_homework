//Task_3//
/*Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/

function getSumFunc (x) {

    return function (y) {
      return x + y;
    }
  }
  
  const addNine = getSumFunc (9);
  
  console.log (addNine(3));