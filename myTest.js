const array = [1, 2, 2, 4, 5, 6, 6];

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

const array2 = [1, 2, 2, 4, 5, 6, 6];

let sum2 = array2.reduce((acc, next) => acc + next, 0);
console.log(sum2);

const array3 = [7, 1, 2, 2, 4, 5, 6, 6];

let max = array3[0];

for (let i = 3; i < array3.length; i++) {
  if (array3[i] > max) {
    max = array3[i];
  }
}
console.log(max);

const array4 = [1, 2, 2, 4, 5, 6, 6];

let min = array4[0];

for (let i = 0; i < array4.length; i++) {
  if (array4[i] < min) {
    min = array4[i];
  }
}
console.log(min);

const array5 = [1, 2, 2, 4, 5, 6, 6, 8, 9];

let max2 = array5[0];

for (let i = 0; i < array5.length; i++) {
  max2 = array5[i] > max2 ? array5[i] : max2;
}
console.log(max2);

const array7 = [1, 2, 2, 4, 5, 6, 6, 8, 9];

let min5 = array7[0];
let max5 = array7[0];

for (let i = 0; i < array7.length; i++) {
  max5 = Math.max(array7[i], max5);
  min5 = Math.min(array7[i], min5);
}
console.log(max5, min5);

const array8 = [1, 2, 2, 4, 5, 6, 6, 8, 9];

let max7 = array8.reduce((acc, next) => Math.max(acc, next), 0);
let min7 = array8.reduce((acc, next) => Math.min(acc, next), 1);
console.log(max7, min7);

const array9 = [1, 2, 2, 4, 5, 6, 6, 8, 9, 33];

array9.sort((a, b) => a - b);

let max9 = array9[array9.length - 1];
let max10 = array9.pop();
console.log(max9, max10);

const array10 = [10, 1, 0, 2, 2, 4, 5, 6, 6, 8, 9, 33];

array10.sort((a, b) => b - a);

let min10 = array10[array10.length - 1];
console.log(min10);
console.log(Math.max(...array10));
console.log(Math.min(...array10));
console.log(Math.max.apply(null, array10));
