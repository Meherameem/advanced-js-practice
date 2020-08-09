let bonusNum = 20;

function sum(a, b){
    let result = a + b + bonusNum;
    return result;
}

const add = sum(3, 5);
console.log(add);

//console.log(bonusNum);//bonusNum can be accessed anywhere in this file as it is declared not within any closed section.any close section or outside it can be used and accessed.
//console.log(result); //as result is defined only within the function so you can't access it outside the function.will give you an error.
//these rules applies for const and let but var is different,anywhere declared,it is automatic global.



