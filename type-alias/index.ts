type MyName = string;

var capt: MyName = "캡틴";

type MyMessage = string | number;

function logText(text: MyMessage) {
    //...
}

var message: MyMessage = "안녕하세요";
logText(message);

// type User = {
//     id: string;
//     name: string;
// }

// var seho: User;

// interface Admin {
//     id: string;
//     name: string;
// }

// var yurim: Admin;

// interface Person {
//     name: string;
//     age: number;
// }

// type Adult = {
//     old: boolean;
// }

// type Teacher = Person & Adult;

// interface Developer extends Person {
//     skill: string;
// }

// var joo: Developer = {
//     name: '형주',
//     age: 21,
//     skill: '웹개발'
// }

// type Person = {
//     name: string;
//     age: number;
// }

// type Developer = {
//     skill: string;
// }

// type Joo = Person & Developer;

// var joo: Joo = {
//     name: '형주',
//     age: 21,
//     skill: '웹개발'
// }

interface Person {
    name: string;
    age: number;
}

interface Person {
    address: string;
}

var seho: Person = {
    name: '세호',
    age: 30,
    address: '광교'
}

type MyString = string;
type StringOrNumber = string | number;

// 제네릭
type Dropdown<T> = {
    id: string;
    title: T;
}

// 유틸리티 타입
type Admin = { name: string; age: number; role: string; }
type OnlyName = Pick<Admin, 'name'>

// 맵드 타입
type Picker<T, K extends keyof T> = {
    [P in K]: T[P];
}

// 1. 타입 별칭으로 API 함수의 응답 형태를 정의
// type User = {
//     id: string;
//     name: string;
// }

// function fetchData(): User {
//     return axios.get('http://localhost:3000/users/1');
// }

// 2. 인터페이스로 API 함수의 응답 형태를 정의
// interface User {
//     id: string;
//     name: string;
// }

// function fetchData(): User {
//     return axios.get('http://localhost:3000/users/1');
// }

// interface Admin {
//     role: string;
//     department: string;
// }

// // 상속을 통한 인터페이스 확장
// interface User extends Admin {
//     id: string;
//     name: string;
// }

// // 선언 병합을 통한 타입 확장
// interface User {
//     skill: string;
// }