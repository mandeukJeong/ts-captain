function getText<T>(text: T): T {
    return text;
}

var myString = getText<string>('hi');
var myNumber = getText<number>(100);

// function getText(text: string): string {
//     return text;
// }

// function getNumber(num: number): number {
//     return num;
// }

// function getText(text: any): any {
//     return text;
// }

interface ProductDropdown {
    value: string;
    selected: boolean;
}

interface StockDropdown {
    value: number;
    selected: boolean;
}

interface AddressDropdown {
    value: { city: string; zipCode: string; };
    selected: boolean;
}

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

// 드롭다운 유형별로 각각의 인터페이스를 연결
// var product: ProductDropdown;
// var stock: StockDropdown;
// var address: AddressDropdown;

// 드롭다운 유형별로 하나의 제네릭 인터페이스를 연결
var product: Dropdown<string>;
var stock: Dropdown<number>;
var address: Dropdown<{ city: string; zipCode: string; }>

function embraceEverything<T extends string>(thing: T): T {
    return thing;
}

function lengthOnly<T extends { length: number }>(value: T) {
    return value.length;
}

lengthOnly('hi');
lengthOnly([1, 2, 3]);
lengthOnly({ title: 'abc', length: 123 });

type DeveloperKeys = keyof { name: string; skill: string; };

function printKeys<T extends keyof { name: string; skill: string; }>(value: T) {
    console.log(value);
}

function printTextLength<T extends { length: number }>(text: T) {
    console.log(text.length);
}

// function printTextLength<T>(text: T[]) {
//     console.log(text.length);
// }

printTextLength<string>('hello');