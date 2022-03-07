class Person {
  name: string;
  age: number;
  log: string;
  // private, public, protected, readonly 속성을 부여 가능

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}