# heybit-ui-styled-components

## 설치 방법

```terminal
pnpm add heybit-ui-styled-components
```

### [데모 페이지 확인하기](https://uprise-fin.github.io/heybit-ui-styled-components/)

## 목적

`heybit-ui-styled-components` 는 프론트엔드 프레임워크에 제약이 없는 라이브러리입니다.

## 사용법

```html
<script
  type="module"
  src="/node_modules/heybit-ui-styled-components/dist/module.js"
></script>
```

### 글로벌 css에 스타일을 넣어서 컴포넌트가 정상적인 디자인으로 노출되지 않는다면?

1. 글로벌 css에 스타일을 특정 스타일을 제거하기 어렵다면 not 셀렉터로 우회하는 방법
2. 클래스와 함께 사용하여 css ordering을 올리는 방법

```scss
// before
* {
  color: #292929;
}
// after
*:not(hb-button, hb-등등등) {
  color: #292929;
}
```

```html
<!-- before -->
<hb-button ...></hb-button>

<!-- after -->
<hb-button class="hb-button" ...></hb-button>
```
