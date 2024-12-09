"use strict";

// Основы алгоритмического мышления и решения задач.

function isPalindrome(str) {
  const arrStr = str.split(" ").join("").toLowerCase().split("");
  const newArrStr = [[], []];
  if (arrStr.length % 2) {
    for (let i = 0; i < arrStr.length; i++) {
      if (i <= (arrStr.length - 1) / 2 - 1) {
        newArrStr[0].push(arrStr[i]);
      } else {
        newArrStr[1].push(arrStr[i]);
      }
    }
    newArrStr[1].shift();
    newArrStr[1].reverse();
    return console.log(newArrStr[0].join() == newArrStr[1].join());
  } else {
    for (let k = 0; k < arrStr.length; k++) {
      if (k <= arrStr.length / 2 - 1) {
        newArrStr[0].push(arrStr[k]);
      } else {
        newArrStr[1].push(arrStr[k]);
      }
    }
    newArrStr[1].reverse();
    return console.log(newArrStr[0].join() == newArrStr[1].join());
  }
}

function fizzBuzz(number) {
  let arrNumber = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0) {
      arrNumber.push("Fizz");
    } else if (i % 5 == 0) {
      arrNumber.push("Buzz");
    } else {
      arrNumber.push(i);
    }
  }
  console.log(arrNumber.join(" "));
}

function chunkArray(array, size) {
  let newSize = size - 1;
  let arrSize = 0;
  const arr = [];

  for (let i = 0; i < array.length; i++) {
    if (i <= newSize) {
      arr[arrSize] = arr[arrSize] ?? [];
      arr[arrSize].push(array[i]);
    } else {
      newSize += size;
      arrSize += 1;
      arr[arrSize] = arr[arrSize] ?? [];
      arr[arrSize].push(array[i]);
    }
  }
  return console.log(arr);
}

isPalindrome("А роза упала на лапу Азора");
fizzBuzz(100);
chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2); // [[1, 2], [3, 4], [5, 6],[7, 8]]
