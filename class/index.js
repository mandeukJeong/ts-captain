// function Person(name, skill) {
//     this.name = name;
//     this.skill = skill;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WaterPurifier_waterAmount;
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
var Chatgpt = /** @class */ (function () {
    function Chatgpt(name) {
        this.name = name;
    }
    Chatgpt.prototype.sum = function (a, b) {
        return a + b;
    };
    return Chatgpt;
}());
var gpt = new Chatgpt('대화형 AI');
gpt.sum(10, 20);
var WaterPurifier = /** @class */ (function () {
    function WaterPurifier(waterAmount) {
        _WaterPurifier_waterAmount.set(this, void 0);
        __classPrivateFieldSet(this, _WaterPurifier_waterAmount, waterAmount, "f");
    }
    WaterPurifier.prototype.wash = function () {
        if (__classPrivateFieldGet(this, _WaterPurifier_waterAmount, "f") > 0) {
            console.log('정수기 동작 성공');
        }
    };
    return WaterPurifier;
}());
_WaterPurifier_waterAmount = new WeakMap();
var purifier = new WaterPurifier(30);
purifier.wash(); // 정수기 동작 성공
purifier.waterAmount = 0;
purifier.wash();
var Person = /** @class */ (function () {
    function Person(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    Person.prototype.sayHi = function () {
        console.log('hi');
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, skill) {
        var _this = _super.call(this, name, skill) || this;
        _this.sayHi();
        return _this;
    }
    Developer.prototype.coding = function () {
        console.log('fun doing ' + this.skill + ' by ' + this.name);
    };
    return Developer;
}(Person));
var capt = new Person('캡틴', '타입스크립트');
// capt.sayHi();
var hulk = new Developer('헐크', '소리치기');
hulk.coding();
// console.log(hulk.name);
