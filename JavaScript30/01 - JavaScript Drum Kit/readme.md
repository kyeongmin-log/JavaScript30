# 01 - JavaScript Drum Kit

- 키보드로 동작하는 드럼 페이지

## 찾아본 내용 정리

### [HTML]

```
1. <kbd>가 뭐지?
    > 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타냄.
```

### [JS]

```
1. Array.from(object)
    > array-like object나 iterable object를 얕게 복사해 새로은 Array 객체를 만들어서 return한다.

2. HTMLElement: transitionend event
    > CSS transition이 완료된 후에 fired되는 event.
```

## 문제점

```
1. 빠르게 눌러도 사운드가 반복적으로 나오지 않는다. 사운드의 시간이 끝나야 반복됨.
    > 재생 시간을 줄이기위해 HTMLMediaElement.playbackRate 를 사용해 보았으나 소리가 자체가 변함으로 사용불가.
        > HTMLMediaElement.currentTime을 사용하여 누를 때마다 사운드 시간을 0으로 초기화하여 사운드가 반복적으로 나올 수 있게 됌.
```

## Add function

```
+ mouse 클릭 시에도 사운드 재생

+ 화면에 크기에 따라 요소 재배치
```
