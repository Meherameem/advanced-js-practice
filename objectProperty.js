const fav = [
    {id:21, name:"korolla vaji"},
    {id:31, name:"kumra ful vaji"},
    {id:41, name:"chingrir dopiaja"},
    {id:51, name:"shol mach er dopiaja"},
    {id:61, name:"koi mach vaja"},
    {id:71, name:"vortas"},
    {id:81, name:"deshi murgir patla jhal jhol"},
    {id:91, name:"shaak"},
    {id:11, name:"gorur kalavuna"}
];

//extracting the names from fav 
// const foodName = []
// for (let i = 0; i<fav.length; i++){
//     let fname = fav[i].name;
//     foodName.push(fname);
// }
// console.log(foodName);

//smarter way to extract the name from fav
const names = fav.map(s => s.name);
console.log(names);

const specificId = fav.filter(s => s.id>40);
console.log(specificId);