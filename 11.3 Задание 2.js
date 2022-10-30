// Задание 2 - 11.3

function checkPrimeInt(userInt) {
  let isPrime = true;
  if (userInt === 1 || userInt === 0) {
    alert(`${userInt} is neither prime nor composite number`);
  }
  else if (Number.isNaN(userInt) || userInt >= 1000) {
    alert(`${userInt} is incorrect data, try again`);
  }
  else if (userInt > 1) {
    for (let i = 2; i < userInt; i++) {
      if (userInt % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
        alert(`${userInt} is a prime number`);
    } else {
      alert(`${userInt} is a composite number`);
    }
  }
}
let userInt = +prompt("Enter a positive integer from 0 to 1000");
checkPrimeInt(userInt);