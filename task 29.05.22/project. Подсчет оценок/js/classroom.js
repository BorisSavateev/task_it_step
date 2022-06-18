/* classroom.js */

/** @param {number[]} grades */
/** @param {number[]} grades */
export const getNumberOfGrades = grades => grades.length;
  
  /** @param {number[]} grades */
  export const getSumGrades = grades => {
    // let sum = 0;
    // grades.forEach(grade => {sum += grade});
    // return sum; 
    return grades.reduce((total, current) =>  total + current);
  }
  
  /** @param {number[]} grades */
  export const getAverageValue = grades => getSumGrades(grades) / getNumberOfGrades(grades);
  
  /** @param {number[]} grades */
  export const getPassingGrades = grades => {
    return grades.filter(grade => grade >= 10);
  }
  
  /** @param {number[]} grades */
  export const getFailingGrades = grades => {
    return grades.filter(grade => grade < 9);
  }
  
  /** @param {number[]} grades */
  export const getRaisedGrades = grades => grades.map(grade => (grade === 20) ? 20 : grade + 1);
  