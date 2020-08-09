let food;
console.log(food);//no value has been assigned to food so undefined(1)

function add(num1,num2){
    console.log(num1 + num2);
    return //undefined because nothing has been returned(3)
}

const result = add(15 + 14);
console.log(result); //undefined because the function named add didn't return any value(2)

function multiply(num3,num4){
    console.log(num3,num4);
}
multiply(23); //as num4 has not been defined so undefined(4)

const classCode = {bangla:101,english:102,math:103};
console.log(classCode.physics);//as no object called physics is present(5)

const fun = undefined;
console.log(fun);//just for fun still another way to get undefined(6)

const ages = [11,12,13];
console.log(ages[10]); //as we don't have 11th item of ages array
