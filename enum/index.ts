enum ShoesBrand {
    Nike,
    Adidas,
    NewBalance
}

var myShoes = ShoesBrand.Nike;
var yourShoes = ShoesBrand.NewBalance;

// enum Direction {
//     Up, // 0
//     Down, // 1
//     Left, // 2
//     Right // 3
// }

// console.log(Direction.Up); // 0

// enum Direction {
//     Up = 10,
//     Down, // 11
//     Left, // 12
//     Right // 13
// }

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

enum Answer {
    Yes = 'Yes',
    No = 1
}

enum Authorization {
    User,
    Admin,
    SuperAdmin = User + Admin,
    God = "abc".length
}

const enum logLevel {
    Debug = 'Debug',
    Info = 'Info',
    Error = 'Error'
}