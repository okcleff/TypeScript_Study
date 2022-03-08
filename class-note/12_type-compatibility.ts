// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

class Human {
  name: string;
}

let dev: Developer;
let person: Person;
// dev = person;
// dev = new Human();

// 함수
let logNum = (a: number) => {
  // console.log(a);
};

let sum = (a: number, b: number) => {
  // return a + b;
};
// logNum = sum;
sum = logNum;

// 제네릭
interface Empty<T> {
  // ..
}

let a1: Empty<string>;
let a2: Empty<number>;
a1 = a2;
a2 = a1;

interface NotEmpty<T> {
  data: T;
}

let b1: NotEmpty<string>;
let b2: NotEmpty<number>;
// b1 = b2;
// b2 = b1;
