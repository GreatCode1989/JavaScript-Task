const array = [1, 2, 2, 4, 5, 6, 6, 8, 9, 33];

const reversed = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversed.push(array[i]);
}
console.log(reversed);
console.log(array.reverse());

const array2 = [1, 2, 2, 4, 5, 6, 6, 8, 9, 33];

const reversed2 = array.map((e, index, arr) => arr[arr.length - index - 1]);

const array3 = [1, 2, 2, 4, 5, 6, 6, 8, 9, 33];
console.log([...array3].map([].pop, array3));
