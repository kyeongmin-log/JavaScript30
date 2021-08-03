# 20 - Speech Detection

- 마이크를 이용하여 목소리 추출 후 웹에 띄우기

## 리뷰

말하는 내용을 브라우저에 띄우기 괜찮았다.

시간이 갈수록 목소리의 시대가 올거라고 생각하는데

이걸 이용하여 간단한 무언가를 개발해봐야겠다.

## 찾아본 내용

```js
const recognition = new SpeechRecognition(); //음성 인식 장치 클래스를 생성

recognition.lang = "en-US"; //사용할 언어 초기화
recognition.interimResults = false; //중간 결과 값을 보여줄 것인지
recognition.maxAlternatives = 1; //발음과 비슷하게 매치되는 대안(Alternatives)의 수. 즉, 높을수록 적합한 단어로 교체해준다. 기본값은 1.

recognition.start();
```

[[참고문서]](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
