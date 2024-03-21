const array = [1, 2, 2, 4, 5, 6, 6];

let max = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
   }
}

console.log(max);
