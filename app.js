// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Aidan',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];
person.role.push('admin');
// person.role[1] = 10;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hoddy = _a[_i];
    console.log(hoddy.toUpperCase());
    // console.log(hoddy.map());
}
