/**
 * Created by hl on 2019/1/25.
 */
function sayHello(person: string) {
    return 'Hello, ' + person;
}
let user = 'Ryan';
console.log(sayHello(user));

let createdByBoolean: boolean = Boolean(1);

let myName: any = 'rom';
let myAge: number = 25;
myName = 23
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

function alertName(): any {
    alert('My name is Tom');
    return {}
}

let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 11;

interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    aaa: 123
};

tom.name = '123';

let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push(1);


interface NumberArray {
    [index: number]: string;
}
let fibonacci2: NumberArray = ['12'];

// function buildName(firstName: string = 'Tom', lastName: string) {
//     return firstName + ' ' + lastName;
// }
// let tomcat = buildName('Tom', 'Cat');
// let cat = buildName(undefined, 'Cat');

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

declare var jQuery: (selector: string) => any;
jQuery('#foo');

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

declare enum Direction {
    Up,
    Down,
    Left,
    Right
}

let direction = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];


class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHi(): string {
        return `My name is ${this.name}`;
    }
}

let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack


function reverses(x: number): number {
    let y: number,
        z: number = Math.abs(x),
        sum: number [] = [],
        flag: boolean = false,
        reverseRes: number = 0;
    if (z > Math.pow(2, 31) - 1) return reverseRes;
    for (let i = 0; i >= 0; i++) {
        y = z % 10;
        z = parseInt((z / 10).toString());
        if (z == 0) {
            sum.push(y);
            break;
        }
        if (y > 0) {
            flag = true;
        }
        if (flag) {
            sum.push(y);
        } else {
            continue;
        }
    }
    reverseRes = parseInt(sum.join(''));
    if (reverseRes > Math.pow(2, 31) - 1) return 0;
    if (x < 0) reverseRes = 0 - reverseRes;
    return reverseRes;
}

function rev(x: number): number {
    let abs: number = Math.abs(x),
        z: string = parseInt(abs+'').toString(),
        temp: string [] = z.split(''),
        max: number = Math.pow(2, 31) - 1,
        result: number = 0;
    if (abs > max) return result;
    temp.reverse();
    result = parseInt(temp.join(''));
    if (result > max) return 0;
    if (x < 0) result = 0 - result;
    return result;
}

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']32