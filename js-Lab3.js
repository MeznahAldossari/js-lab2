function FizzBuzz(number1) {
  if (number1 % 3 == 0 && number1 % 5 == 0) {
    console.log(`The  ${number1} is: Fizz And Buzz`);
  } else if (number1 % 3 == 0) {
    console.log(`The  ${number1} is: Buzz`);
  } else if (number1 % 5 == 0) {
    console.log(`The  ${number1} is: Fizz`);
  } else {
    console.log(`The  ${number1} is: not Fizz or Buzz`);
  }
}
FizzBuzz(15);
FizzBuzz(1);
