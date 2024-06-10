// function Person(name, skill) {
//     this.name = name;
//     this.skill = skill;
// }

// Person.prototype.sayHi = function() {
//     console.log('hi');
// }

// class Person {
//     constructor(name, skill) {
//         this.name = name;
//         this.skill = skill;
//     }

//     sayHi() {
//         console.log('hi');
//     }
// }

// class Developer extends Person {
//     constructor(name, skill) {
//         super(name, skill);
//         this.sayHi();
//     }

//     coding() {
//         console.log('fun doing ' + this.skill + ' by ' + this.name);
//     }
// }

// var capt = new Developer('캡틴', '방패 던지기');
// capt.coding();

// var capt = new Person('캡틴', '방패 던지기');
// var lee = new Person('길벗', '좋은 책 만들기');

class Chatgpt {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sum(a: number, b: number): number {
        return a + b;
    }
}

var gpt = new Chatgpt('대화형 AI');
gpt.sum(10, 20);

class WaterPurifier {
    #waterAmount: number;

    constructor(waterAmount: number) {
        this.#waterAmount = waterAmount;
    }

    public wash() {
        if (this.#waterAmount > 0) {
            console.log('정수기 동작 성공');
        }
    }
}

var purifier = new WaterPurifier(30);
purifier.wash(); // 정수기 동작 성공
purifier.waterAmount = 0;
purifier.wash();

class Person {
    private name: string;
    private skill: string;

    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }

    protected sayHi() {
        console.log('hi');
    }
}

class Developer extends Person {
    constructor(name: string, skill: string) {
        super(name, skill);
        this.sayHi();
    }

    coding(): void {
        console.log('fun doing ' + this.skill + ' by ' + this.name);
    }
}

var capt = new Person('캡틴', '타입스크립트');
// capt.sayHi();

var hulk = new Developer('헐크', '소리치기');
hulk.coding();
// console.log(hulk.name);