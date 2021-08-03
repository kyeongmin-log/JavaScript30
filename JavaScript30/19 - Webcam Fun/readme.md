# 19 - Webcam Fun

- 브라우저 웹캠과 canvas를 이용한 필터 카메라

## 리뷰

브라우저에서 웹캠을 띄우는 것까지는 완성했으나

필터를 입히는 것과 찍은 사진을 저장하는 부분에서 막혔다.

따라서, 막힌 부분은 강의를 보고나서 작성하였다.

(원래는 finished branch에서 해야할 행동이지만, 동작해보고 싶어서 start에서 강의를 보고나서 진행했다.)

## 알게된 부분

```
1. 사진 저장
    > elemental.setAttribute('download',[fileName]); // fileName.[png || jpeg ...];

2. 필터 부분
    let pixels = ctx.getImageData(0, 0, width, height); //이미지 데이터를 가져옴.

    pixels = rgbSplit(pixels); //해당 이미지 데이터의 값을 수정.(필터)

    ctx.putImageData(pixels, 0, 0); //수정한 이미지 데이터를 다시 넣어준다.
```
