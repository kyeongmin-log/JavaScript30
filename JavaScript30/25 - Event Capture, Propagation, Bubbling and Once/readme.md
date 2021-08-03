# 25 - Event Capture, Propagation, Bubbling and Once

- EventTarget.addEventListener()에서 Event Capture, Propagation, Bubbling and Once에 대해 알아보기

# 찾아본 내용

## Syntax

```js
target.addEventListener(type, listener);
target.addEventListener(type, listener, options);
```

다수의 동일한 className이나 태그들이 addEventListener로 묶여있을 경우, 하위의 요소를 실행하면 상위의 요소도 같이 실행되는 것을 볼 수 있다. 이러한 개념을 Event Bubbling이라고 한다.

Event Bubbling을 막아주기 위해서는 event.stopPropagation();를 해당 addEventListener의 callback 함수 안에 넣어주면 상위 요소로 올라가지 않고 해당 요소만 실행되는 것을 확인할 수 있다.

## options

capture : 묶여있는 요소들에 addEventListener를 적용할 경우, 하위 요소를 클릭해도 상위부터 타고 내려올지 하위부터 타고 올라갈지를 정한다. (default : false)

once : addEventListener를 한번만 실행시키는 boolean형 옵션이다. true면 한번 실행 후 해당 addEventListener를 삭제한다.
