//перше завдання
//перший шлях

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function add(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + add(array.slice(1));
  }
}
console.log(add(array)); //55

//другий шлях

function add(array) {
  return array.length === 0 ? 0 : array[0] + add(array.slice(1));
}
console.log(add(array)); //55

//друге завдання
//перший шлях

let count = 0;
function deepCount(arr) {
  if (!Array.isArray(arr)) {
    return "This is not an array!";
  }
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      count++;
      deepCount(item);
    } else {
      count++;
    }
  });
  return count;
}
console.log(deepCount(["x", "y", ["r"]])); //4

//другий шлях

function deepCount(arr) {
  let count = 0;
  if (!Array.isArray(arr)) {
    return "This is not an array!";
  }
  arr.forEach(function (item) {
    count += Array.isArray(item) ? deepCount(item) + 1 : 1;
  });
  return count;
}
console.log(deepCount(["x", "y", ["r"]])); //4

//третє завдання
const employees = {
  deveploment: {
    backend: [
      { name: "Mike", salary: 2000 },
      { name: "Nikola", salary: 2500 },
    ],
    frontend: [
      { name: "Artem", salary: 3000 },
      { name: "Alex", salary: 2700 },
    ],
  },
  sales: {
    marketing: {
      internet_marketers: [
        { name: "Nina", salary: 1000 },
        { name: "Olena", salary: 1300 },
      ],
      promotion: [
        { name: "Oleg", salary: 1400 },
        { name: "Masha", salary: 1700 },
      ],
    },
    sellers: [
      { name: "Max", salary: 900 },
      { name: "Donald", salary: 700 },
      { name: "Joe", salary: 1100 },
    ],
  },
  designer: [{ name: "Kate", salary: 1800 }],
};

function sumSallary(obj) {
  let sum = 0;
  function totalSum(obj) {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((employees) => (sum += employees.salary));
      } else {
        totalSum(obj[key]);
      }
    }
  }
  totalSum(obj);
  return sum;
}
console.log(sumSallary(employees)); //20100

//четверте завдання

let array1 = [2, 15, 7, 3];
let array2 = [9, 13, 17, 12, 4, 8];
let array3 = [6, 11, 16, 11];

function maxNumber(...arr) {
  if (Array.isArray(arr)) {
    let result = [].concat(...arr);
    return Math.max(...result);
  }
}
console.log(maxNumber(array1, array2, array3)); //17
