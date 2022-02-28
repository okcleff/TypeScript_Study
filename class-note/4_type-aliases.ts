interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// }

let Yujin: Person = {
  name: '유진',
  age: 29,
}

type MyString = string;
const str: MyString = 'hello';

type Todo = {id: string; title: string; done: boolean;}
function getTodo(todo: Todo) {

}