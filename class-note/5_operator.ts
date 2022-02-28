function logMessage(value: any): void {
  console.log(value);
}

logMessage('hello');
logMessage(100);

let sth: string | number | boolean;

function log(value: string | number): void {
  if(typeof value === 'number') {
    value.toLocaleString();
  };
  if(typeof value === 'string') {
    value.split('')
  }
  throw new TypeError('value must be string or number');
}

log('hello');
log(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone (someone: Developer | Person): void {
  console.log(someone.name);
  // console.log(someone.skill);
  // console.log(someone.age);
}

askSomeone({name: 'dev', skill: 'ts'});
askSomeone({name: 'dev', age: 100});

let sth2: string & number & boolean;

function askSomeone2 (someone: Developer & Person): void {
  console.log(someone.name);
  console.log(someone.skill);
  console.log(someone.age);
}

askSomeone2({name: 'dev', skill: 'ts', age: 200});
