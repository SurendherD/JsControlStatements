// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let j = 1;
while (j <= 100) {
  if (j % 2 != 0) {
    console.log(j);
  }
  j++;
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let k = 3;
do {
  console.log(k);
  k = k + 3;
} while (k <= 100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
for (let i = 2; i <= 100; i++) {
  isprime(i);
}

function isprime(num) {
  let count = 0;
  for (let j = 2; j <= num; j++) {
    if (num % j == 0) {
      count = count + 1;
    }
  }

  if (count == 1) {
    console.log(num);
  }
}
