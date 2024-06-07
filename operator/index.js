function logText(text) {
    if (typeof text === "string") {
        console.log(text.toUpperCase());
    }
    if (typeof text === "number") {
        console.log(text.toLocaleString());
    }
}
logText(100);
function introduce(someone) {
    if ("skill" in someone) {
        console.log(someone.skill);
        return;
    }
    if ("age" in someone) {
        console.log(someone.age);
        return;
    }
}
function introduce2(someone) {
    console.log(someone.name);
    console.log(someone.skill);
}
