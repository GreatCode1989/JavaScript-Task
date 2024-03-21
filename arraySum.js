const array = [1, 2, 2, 4, 5, 6, 6];

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(sum);

const array2 = [1, 2, 2, 4, 5, 6, 6];

let sum2 = array2.reduce((acc, next) => acc + next, 0);

console.log(sum2);

const array3 = [1, 2, 2, 4, 5, 6, 6];

console.log(eval(array.join("+")));
