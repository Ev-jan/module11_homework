//Задание 3 - 11.4

function getSum(number) {
    return function(number2) {
      return number + number2;
    }
  }
  let sumfunction = getSum(4);
  let sum = sumfunction(6);
  console.log(sum);
