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

enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR'
}

const person = {
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

for (const hoddy of person.hobbies) {
    console.log(hoddy.toUpperCase());
    // console.log(hoddy.map());
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}
