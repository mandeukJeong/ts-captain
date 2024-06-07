// interface User {
//     name: string;
//     age: number;
// }

// interface Person {
//     name?: string;
//     age: number;
// }

// interface Person {
//     name: string;
//     age: number;
// }

// interface Developer extends Person {
//     skill: string;
// }

// var seho: User = { name: "세호", age: 36 };

// function logAge(someone: Person) {
//     console.log(someone.age);
// }

// function getPerson(someone: Person): Person {
//     return someone;
// }

// var captain = { age: 100 };
// logAge(captain);

// var ironman: Developer = {
//     name: "아이언맨",
//     age: 21,
//     skill: "만들기"
// }

interface Hero {
    power: boolean;
}

interface Person extends Hero {
    name: string;
    age: number;
}

interface Developer extends Person {
    skill: string;
}

var ironman: Developer = {
    name: "아이언맨",
    age: 21,
    skill: "만들기",
    power: true
}

interface StringArray {
    [index: number]: string;
}

var companies: StringArray = ['삼성', '네이버', '구글'];

interface SalaryMap {
    [level: string]: number;
}

var salary: SalaryMap = {
    junior: 100,
    mid: 400,
    senior: 700,
    ceo: 0,
    newbie: 50
}

interface User {
    [property: string]: string;
    id: string;
    name: string;
}

var seho: User = {
    id: '1',
    name: '세호',
    address: '판교'
}