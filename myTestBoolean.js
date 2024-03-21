const array = [7, "current", 0, false, 9, NaN, ""];

const myArray = [];

for (let i = 0; i < array.length; i++) {
  if (!!array[i]) {
    myArray.push(array[i]);
  }
}
console.log(myArray);

const array2 = [7, "current", 0, false, 9, NaN, ""];

const myIsArray = array2.filter((a) => !!a);
const myIsArray1 = array2.filter(Boolean);
console.log(myIsArray, myIsArray1);
