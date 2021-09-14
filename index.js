function mapToNegativize(arr) {
  const newArr = [];
  for (const num of arr) {
    newArr.push(-num);
  }
  return newArr;
}

function mapToNoChange(arr) {
  const newArr = [];
  for (const num of arr) {
    newArr.push(num);
  }
  return newArr;
}

function mapToDouble(arr) {
  const newArr = [];
  for (const num of arr) {
    newArr.push(num * 2);
  }
  return newArr;
}

function mapToSquare(arr) {
  const newArr = [];
  for (const num of arr) {
    newArr.push(num ** 2);
  }
  return newArr;
}

function reduceToTotal(arr, x = 0) {
  let aggregate = x;
  for (const num of arr) {
    aggregate += num;
  }
  return aggregate;
}

function reduceToAllTrue(arr) {
  let truthy;
  for (const num of arr) {
    !!num === true ? (truthy = true) : (truthy = false);
  }
  return truthy;
}

function reduceToAnyTrue(arr) {
  let truthy;
  for (const num of arr) {
    !!num === true ? (truthy = true) : (truthy = false);
  }
  return truthy;
}
