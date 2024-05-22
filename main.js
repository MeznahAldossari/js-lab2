for (i = 0; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log(`even numbers:${i}`);
  }
}

for (i = 1; i <= 10; i++) {
  console.log(`Square:${i ** 2}`);
}

for (i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(`odd numbers:${i}`);
  }
}

let res2 = 0;
for (i = 1; i <= 3; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(`${i}* ${j} = ${j * i}`);
  }
}

let first = 0;
let second = 1;
let res3 = 0;
let temp = 0;

for (let i = 0; i <= 10; i++) {
  if (i == 1 || i == 0) {
    console.log(i);
  }

  temp = first + second;
  first = second;
  second = temp;
  console.log(second);
}
