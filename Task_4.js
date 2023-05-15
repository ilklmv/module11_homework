//Task_4//
/*Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. 
Используйте setInterval.*/

function printNumbers (start, end){
    let current = start;
    
    const intervalId = setInterval (() => {
      console.log (current);
      
      if (current === end) {
        clearInterval(intervalId);
      }
      
      current = current + 1;
    }, 1000); 
  }
  
  printNumbers (3, 18)