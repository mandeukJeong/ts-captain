// var name: string = 'captain';
// var age: number = 100;
var isLogin: boolean = false;
var hero: object = { name: 'captain', age: 100 };
// 문자열 배열
var companies: Array<string> = ['네이버', '삼성', '인프런'];
var companies: string[] = ['네이버', '삼성', '인프런'];
// 숫자 배열
var cards: Array<number> = [13, 7, 2, 4];
var cards: number[] = [13, 7, 2, 4];

var items: [string, number] = ['hi', 1];
var myName: any = '캡틴';
myName = 100;
var age: any = 21;
var empty: null = null;
var nothingAssigned: undefined;

function sayWord(word: string): string {
    return word;
}

function sayMyName(firstName: string, lastName?: string): string {
    return 'my name : ' + firstName + ' ' + lastName;
}

sayMyName('Captain');