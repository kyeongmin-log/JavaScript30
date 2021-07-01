# 14 - JavaScript References VS Copying

- references와 copying의 차이

## 리뷰

```js
let age = 100;
let age2 = age;
console.log(age, age2); //100 100
age2 = 200;
console.log(age, age2); //100 200

let name = "kim";
let name2 = name;
console.log(name, name2); //kim kim
name = "lee";
console.log(name, name2); //lee kim
```

위처럼 string, number, boolean들은 copy가 된다.

그렇다면 배열은?

```js
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

const team = players;
console.log(team); //["Wes", "Sarah", "Ryan", "Poppy"]
team[2] = "kim";
console.log(players); //["Wes", "Sarah", "kim", "Poppy"];
```

배열같은 경우, team의 값을 바꿨지만 players의 값도 바뀐 걸 볼 수 있다. 즉, copying이 아닌 references가 된 걸 볼 수 있다.

이처럼 references은 하나의 값을 바꾸면 해당 값과 연결되어 있는 값도 바뀌지만 copying는 안바뀌는 모습을 볼 수 있다.

그렇다면 배열을 copying하기 위한 방법엔 어떤 것이 있을까?

```js
const team2 = players.slice();
const team3 = [].concat(players);
//es6
const team4 = [...players];
const team5 = Array.from(players);

team2[2] = "kim";
team3[2] = "kim";
team4[2] = "kim";
team5[2] = "kim";

console.log(players, team2);
console.log(players, team3);
console.log(players, team4);
console.log(players, team5);
//["Wes", "Sarah", "Ryan", "Poppy"] === players
//["Wes", "Sarah", "kim", "Poppy"] === team2,3,4,5
```

위와 같은 방법으로 배열을 copying할 수 있다.

마지막으로, 오브젝트를 알아보자.

```js
const person = {
  name: "Wes Bos",
  age: 80,
};

const cap = person;
cap.age = 99;

console.log(person); //{name: "Wes Bos", age: 99}
```

오브젝트도 배열과 마찬가지로 references가 되는 것을 확인할 수 있다.

오브젝도 copying하는 방법을 알아보자.

```js
const cap2 = Object.assign({}, person, { age: 27, number: 99 });
const cap3 = Object.assign({}, person);
//es6
const cap4 = { ...person };

cap3.age = 27;
cap4.age = 27;

console.log(person.age, cap2.age); //80, 27
console.log(person.age, cap3.age); //80, 27
console.log(person.age, cap4.age); //80, 27
```

위와 같은 방법으로 오브젝트도 copying을 진행할 수 있다.

단, 주의할 건 오브젝트와 배열은 중첩되었을 때 copy가 되지 않는다.

```js
const test = [["A", "B"], "C", "D", "F", "G"];
const test2 = [...test];
test2[0][1] = "Z";

console.log(test); //[["A", "Z"], "C", "D", "F", "G"]
console.log(test2); //[["A", "Z"], "C", "D", "F", "G"]

const kim = {
  name: "kim",
  age: 100,
  social: {
    twitter: "@kim",
    facebook: "kim.developer",
  },
};

const kim2 = Object.assign({}, kim);
kim2.social.twitter = "@lee";
console.log(kim.social.twitter); //@lee
console.log(kim2.social.twitter); //@lee
```

이처럼 중첩되었을 때는 references가 되는 것을 확인할 수 있었다.

중첩된 것을 copying하기 위해서는 lodash has a cloneDeep method 사용할 수 있고,

다음과 같이 작성할 수도 있다.

```js
const kim3 = JSON.parse(JSON.stringify(kim));
kim3.social.twitter = "@lee";
console.log(kim.social.twitter); //@kim
console.log(kim3.social.twitter); //@lee
```

이렇게 작성할 시 copying이 된 것을 확인할 수 있었다.
