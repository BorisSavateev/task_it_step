/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
 function getSumGrades(students) {
	// 1 способ
    // return students.reduce(function (total, current){
    //     return total + current.learnEnglish.grade;
    // },0);
    // 2 способ
    let sum = 0;
    students.forEach(function (studentgrade){
    sum  = sum + studentgrade.learnEnglish.grade;
    });
    return sum;
}

// Sample usage - do not modify
let students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];
console.log(getSumGrades(students)); // 37