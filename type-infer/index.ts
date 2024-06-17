// var a = 10;
var a;
a = 10;

function sum(a: number, b: number) {
    return a + b;
}

var result = sum(1, 2);

function getA(a: number) {
    let c = 'hi';
    return a + c;
}

interface Dropdown<T> {
    title: string;
    value: T;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    tag: string;
    description: string;
}

let shoppingDetailItem: DetailedDropdown<number> = {
    title: '길벗 책',
    description: '쉽고 유용하다',
    tag: '타입스크립트',
    value: 1
}

// let shoppingItem: Dropdown<number> = {
//      title: '길벗 책',
//      value: 12
// }