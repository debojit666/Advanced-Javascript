const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannnnnnaaaa'},
    {id: 41, name: 'Riaz'},
    {id: 71, name: 'DeepJol' },
];
const names = students.map( s => s.name);
const ids = students.map ( s => s.id);
const bigger = students.filter( s => s.id > 40);
const biggest = students.find(s => s.id > 50);

console.log(ids);
console.log(names);
console.log(bigger);
console.log(biggest);