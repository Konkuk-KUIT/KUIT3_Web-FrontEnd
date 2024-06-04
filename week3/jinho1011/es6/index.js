const arr = [-3, -2, -1, 0, 1, 2, 3];

const arr2 = arr.reduce((prevValue, currValue) => {
  console.log(prevValue, currValue);
  return prevValue + currValue;
});

console.log(arr2);
