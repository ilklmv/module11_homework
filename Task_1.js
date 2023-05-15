//Task_1//
/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.*/

function countEvenOddWithZero(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
    
    for (let i = 0; i < arr.length; i = i + 1) {
        if (typeof arr[i] !== "number") {
        continue;
        }
        if (arr[i] === 0) {
        zeroCount++;
        continue;
        }
        if (arr[i] % 2 === 0) {
        evenCount++;
        } else {
        oddCount++;
        }
    }
    
    console.log (`Количество чётных элементов: ${evenCount}`);
    console.log(`Количество нечётных элементов: ${oddCount}`);
    console.log(`Количество нулевых элементов: ${zeroCount}`); 
  }
    
    const arr = [1, "hello", null, 0, 3, 4, 1, "world"];
    countEvenOddWithZero(arr);