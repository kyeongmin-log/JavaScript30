# 22 - Follow Along Link Highlighter

- mouse over 시 link된 글자에 highlighter.

## 리뷰

처음에는 target의 offset을 가지고 지정했는데,

menu에서는 잘 동작하나, wrapper에서는 제대로 동작하지 않았다.

알고 보니 해당 offset은 상대위치를 가져오기에

wrapper에 있는 link에 mouse를 over할 시

부모 요소인 body에서부터 offset값을 가져오기에 제대로 동작하지 않았던 것이다.

상대위치가 아닌 절대위치를 가져오기 위해 찾아보니

Element.getClientRects()이라는 api를 써서 문제를 해결할 수 있었다.

+) offset을 사용한다면

만약 offset을 사용하고 싶다면 부모 태그 스타일에 position : relative;을 추가하여 사용할 수 있다.

[[참고사이트-절대위치와상대위치란?]](https://mommoo.tistory.com/85)

[[참고사이트-Element.getClientRects()]](https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects)
