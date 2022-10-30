//Задание 4 - 11.6

function iterateOverRange(a, b) {
    let current = a;
    let timerId = setInterval(function() {
      if (current === b) {
        clearInterval(timerId);
      }
      console.log(current++);
    }, 1000);
  }
iterateOverRange(1,10)
