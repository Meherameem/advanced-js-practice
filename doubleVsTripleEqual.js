const first = 2;
const second = 3;
if (first == second){
    console.log('true');
}
else{
    console.log('false');
}
//double equal never checks for the type of the variables
const int = 2;
const str = '2';
if (int == str){
    console.log('true');
}
else{
    console.log('false');
}
//but triple equal does
if (int === str){
    console.log('true');
}
else{
    console.log('false');
}

const trueInt= 1;
const trueStr = true;
//as javascript considers one as true value+double equal doesn't check for type
if (trueInt == trueStr){
    console.log('true');
}
else{
    console.log('false');
}
//but triple equal does
if (trueInt === trueStr){
    console.log('true');
}
else{
    console.log('false');
}