# 04 - Array Cardio Day 1

- Array 강화 훈련

## 찾아본 내용 정리

> 8.Reduce Exercise에서

```js
const total = data.reduce((acc, key) => {
  if (!acc[key]) {
    acc[key] = 0;
  }
  acc[key]++;
  return acc;
}, {});
```

if(!acc[key]){...}에서 acc[key]를 찍어보면 해당 키가 없기에 undefined이 나온다.

!를 붙이므로 해석하면 'acc[key]가 없다면'이 되므로 true가 나온다.

[[참고자료 : 속성으로 객체 분류하기(ctrl+f로 검색)]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) : 영문일 경우, Grouping objects by a property 검색
