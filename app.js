// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Aidan',
//     age: 28,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Aidan',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];
// person.role.push('admin');
// person.role[1] = 10;                    // get Error
// person.role = [0, 'admin', 'user'];     // get Error
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hoddy = _a[_i];
    console.log(hoddy.toUpperCase());
    // console.log(hoddy.map());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
