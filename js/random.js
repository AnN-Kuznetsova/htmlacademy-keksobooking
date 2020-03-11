'use strict';

(function () {
  //  Функция нахождения случайного числа
  var randomNumber = function (num) {
    return Math.floor(Math.random() * (num + 1));
  };

  //  Функция нахождения случайного числа в заданных пределах
  var randomNumberOfRange = function (minValue, maxValue) {
    return randomNumber(maxValue - minValue) + minValue;
  };

  //  Функция выбора случачйного элемента массива
  var getRandomArrayElement = function (array) {
    return array[randomNumber(array.length - 1)];
  };

  //  Функция создания массива случайной длины на основе имеющегося
  var getRandomArray = function (array) {
    var copyArray = array.slice();
    var arrayLength = window.random.number(copyArray.length);
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
      newArray.push(copyArray.splice(window.random.number(copyArray.length - 1), 1).toString());
    }
    return newArray;
  };


  window.random = {
    number: randomNumber,
    arrayElement: getRandomArrayElement,
    array: getRandomArray,
    numberOfRange: randomNumberOfRange
  };
})();
