const num = [1,2,3,4,5,6,7,8,9];
// const part = num.slice(2,5);
// console.log(num,part);

const removed = num.splice(2,5,34,35,456,45);//splice(deleting start point,how many numbers to delete),the remaining numbers will be pushed.
console.log(removed);//returns two arrays:deleted part and the remaining part
console.log(num);

const together = num.join(' '); //join creates a string
console.log(together);

