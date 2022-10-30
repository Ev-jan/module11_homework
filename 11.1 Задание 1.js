// Задание 1 - 11.1

function getNumSorted(arr) {
  let even = 0;
  let odd = 0;
  let zero = 0;
  arr.forEach(function(item) {
    if (item !== 0 && isNaN(item) === false && typeof item === "number") {
      if (item % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    } else if (item === 0) {
      zero++;
    }
  });
  return (`even: ${even}, odd ${odd}, zero ${zero}`);
}

let arr = ['',NaN,1,1,1,1,2,0,4,8,6,9,7,42,46,841,1,0,0,31,0,'c',0,undefined, null];
console.log(getNumSorted(arr));

