/*
  Title:
  Create Phone Number
  Description:
  Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), которая возвращает строку этих чисел в виде номера телефона.
  Example:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/
 
const createPhoneNumber = numbers => (numbers.length === 10) ? `(${numbers.join("").substring(0,3)}) ${numbers.join("").substring(3,6)}-${numbers.join("").substring(6)}` : "Введите 10-тизначный номер";


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))