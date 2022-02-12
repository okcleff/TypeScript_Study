// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  console.log(a + b);
}
log('hello');
log('hello', 'world');
