// 타입 추론 기본 1
const a = 10;

function getB(b = 10) {
  const c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T>{
//   value: T;
//   title: string;
// }

// const item: Dropdown<string> ={
//   value: 'abc',
//   title: 'hello',
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface Detailed<K> extends Dropdown<K> {
  desc: string;
  tag: K;
}

const detailedItem: Detailed<number> = {
  value: 'abc',
  title: 'hello',
  desc: 'def',
  tag: 'xyz',
};

// Best Common Type
const arr = [1, 2, true, 'a'];
