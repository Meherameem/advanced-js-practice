const number = [2,3,4,5,6,7,8,9];
//first way

// const output = [];
// for (let i = 0; i<number.length;i++){
//     let element = number[i];
//     let result = element * element;
//     output.push(result);
// }
// console.log(output);

//second way -Map

// const result = number.map(function(element){
//     return element * element;
// });
// console.log(result);

//third way -Map

// const result = number.map(x => x*x);
// console.log(result);

//filter
//  const biggerThanFive = number.filter(x => x>5);
//  console.log(biggerThanFive);

//find
const isThere = number.find(x => x<5);
console.log(isThere);