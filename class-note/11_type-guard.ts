interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tom', age: 33, skill: 'JS' };
}

const tom = introduce();
console.log(tom.skill);

if ((tom as Developer).skill) {
  const skill = (tom as Developer).skill;
  console.log(skill);
} else if ((tom as Person).age) {
  const age = (tom as Person).age;
  console.log(tom);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tom)) {
  tom.skill;
} else {
  tom.age;
}
