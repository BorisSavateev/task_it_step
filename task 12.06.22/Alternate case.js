/*
  Title:
  Alternate case
  Description:
  Напишите функцию alternateCase, которая переключает каждую букву в строке с верхней на нижнюю и с нижней на верхнюю.
  Examples:
  Hello World -> hELLO wORLD
*/
 
 
const alternateCase = str => {
  let newstr=[];
  str.split("").forEach(item => {(item === item.toLowerCase()) ? newstr.push(item.toUpperCase()) : newstr.push(item.toLowerCase());
 });
 return newstr.join("");
}

console.log(alternateCase("Hello World"));