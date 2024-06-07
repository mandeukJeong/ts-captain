function logText(text: string | number) {
    if (typeof text === "string") {
        console.log(text.toUpperCase());
    }

    if (typeof text === "number") {
        console.log(text.toLocaleString());
    }
}

logText(100);

interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

function introduce(someone: Person | Developer) {
    if ("skill" in someone) {
        console.log(someone.skill);
        return;
    }

    if ("age" in someone) {
        console.log(someone.age);
        return;
    }
}

interface Avenger {
    name: string;
}

interface Hero {
    skill: string;
}

function introduce2(someone: Avenger & Hero) {
    console.log(someone.name);
    console.log(someone.skill);
}