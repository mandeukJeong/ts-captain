var capt = "캡틴";
function logText(text) {
    //...
}
var message = "안녕하세요";
logText(message);
var seho = {
    name: '세호',
    age: 30,
    address: '광교'
};
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
