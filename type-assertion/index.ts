var myName = '세호' as string;

interface Person {
    name: string;
    age: number;
}

// var joo = {
//     name: '형주',
//     age: 31
// };

// var joo: Person = {
//     name: '형주',
//     age: 31
// }

var joo = {} as Person;
joo.name = '형주';
joo.age = 31;

function getId(id) {
    return id;
}

var myId = getId('josh') as number;

var num = (10 as any) as number;

// var num = 10 as string;

interface Books {
    shuffle: Function
}

function shuffleBooks(books: Books | null) {
    var result = books!.shuffle();
    return result;
}