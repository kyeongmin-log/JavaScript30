# 06 - Ajax Type Ahead

- Ajax를 이용한 검색목록 만들기.

## 문제점

```
1. 검색어가 하이라이트 되지 않는다.
    > RegExp 클래스와 replace를 사용하여 검색한 글자를 hl클래스로 감싸보았지만 되지 않았다.

2. inputData()가 마음에 들지 않는다.
    > 더 간단한 방법은 없을까?
```

> 진행 방향

```
- 강의를 듣고나서 위의 문제점을 해결해보자.
    > finished branch에서 진행.
```

## 해결 방안

```
1. 검색어가 하이라이트 되지 않는다.
    > RegExp 클래스와 replace를 사용하여 검색한 글자를 hl클래스로 감싸보았지만 되지 않았다.
        > RegExp 클래스의 사용법에 문제가 있었다. city와 state에 replace를 적용하여 변수에 넣은 뒤 해당 변수를 innerHTML로 넣으니 잘 작동한다.

2. inputData()가 마음에 들지 않는다.
    > 더 간단한 방법은 없을까?
        > innerHTML을 써서 적용해보았다. 확실히 보기에 더 편한 거 같다. 하지만 이번 상황처럼 태그가 고정되어있고 보안에 문제가 없다면 innerHTML을 쓰는 것이 좋아보이지만 보안과 관련이 있고 태그가 유동적으로 바뀐다면 createElement()를 통해 태그를 만들어서 사용하는 것이 더 좋은 방법이 될 수 있다.
```

## 찾아본 내용 정리

```
1. What is the meaning RexExp?
    > Regular Expression의 약자. 정규표현식이란 뜻을 가지고 있다.
      정규표현식이란 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용된다.

2. RexExp Guide
    > 내가 사용한 것에 대해 설명하자면

      const regex = new RegExp(pattern[, flags]]); 이렇게 정규표현식을 생성하여 사용할 수도 있고
      const regex = /pattern/[flags]; 이런식으로 정규표현식을 바로 사용할 수도 있다. (이 방식을 많이 사용한다.)

      flags에는 여러 종류가 있는데 여기서 사용한 g,i를 보면 다음과 같다.
      g (global) : 문자열 내의 모든 패턴을 검색한다.
      i (ignore Case) : 대소문자를 구별하지 않고 검색한다.

      정규표현식을 다루는 다양한 메소드가 있으며, 여기서 사용한 .match()를 보면 다음과 같다.
      문자열.match(정규식) : 일치하는 문자열의 배열(Array)을 반환한다.
```

> RexExp

참고자료(1) : https://poiemaweb.com/js-regexp

참고자료(2) : https://heropy.blog/2018/10/28/regexp/

다양한 메소드와 케이스가 설명되어 있다. 필요할 때 찾아보자.
