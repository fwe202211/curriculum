for (let number = 1; number < 101; number++) {

  if (number % 5 == 0 && number % 3 == 0) {
    console.log("FizzBuzz!!");
    continue;

  } else if (number % 3 == 0) {
    console.log("Fizz!");
    continue;

  } else if (number % 5 == 0) {
    console.log("Buzz!");
    continue;
  }

  console.log(number);
}
