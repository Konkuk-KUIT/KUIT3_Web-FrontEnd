const arr = [-3, -2, -1, 0, 1, 2, 3];

const arr1 = arr.map((value, index) => {
  console.log(value, index);
  return value;
});
console.log(arr1);

const arr2 = arr.reduce((prevValue, currValue) => {
  console.log(prevValue, currValue);
  return prevValue + currValue;
});

console.log(arr2);

const arr3 = arr.filter((value) => {
  return value > 0;
});
console.log(arr3);
