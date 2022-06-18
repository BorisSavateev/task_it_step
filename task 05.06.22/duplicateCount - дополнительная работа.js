// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice(`b` and`B`)
// "indivisibility" -> 1 # 'i' occurs six times

const duplicateCount = (text) => {
  let newtext = [];
  let occurs = [];
  let arrays = text.toLowerCase().split("")
  arrays.forEach(array => {newtext.includes(array) &&  !occurs.includes(array) ?  occurs.push(array) : newtext.push(array)});
  return occurs.length;
}

console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
