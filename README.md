# heybit-ui-styled-components

### [데모 페이지 확인하기](https://uprise-fin.github.io/heybit-ui-styled-components/)

## 사용법

기본적으로 javascript 만 사용해도 문제는 없습니다. 다만 렌더링 되는 도중에 스타일이 덜 불러와졌을때 깜밖이는 현상을 제거하기 위해
css를 우선 불러올 것을 권장합니다.

### css

```html
<link
  rel="stylesheet"
  href="/node_modules/heybit-ui-styled-components/dist/initial.css"
/>
```

```javascript
import "/node_modules/heybit-ui-styled-components/dist/initial.css";
```

자바스크립트는 두가지 방법이 있는데,
필요한 컴포넌트만 불러오거나 전체를 불러오는 방법입니다.

```javascript
import "heybit-ui-styled-components/dist/components/forms/hb-input"; // selected
//or
import "heybit-ui-styled-components"; // all components
```

### 주의사항

넉스트에서 ssr 활성화 시 window에러가 나는데, 이거는 라이프사이클에서 window가 있을때 require방식으로 주입하는 방법으로 해결 가능합니다.

1. 데코레이터를 안쓴이유
   스토리북 사용 시 properties를 써야 되서, 데코레이터제거하고 properties를 씀
1. css의 host관련
   호스트를 직접 사용하면 css 스타일만 사용할때에 적용되지 않습니다. 하여 `mixins host*`를 이용해야 합니다.
   host 자체를 스타일링 할때 `@include host-styled{}`
   host의 변경에 따른 내부 엘리먼트에 스타일링 할때 `@include child-styled{}`

#### part

shadow 내부를 접근하기 위해서는 part라는 속성이 있어야합니다.

```html
<hb-icon icon="ddd.svg">
  shadow~~
  <svg path="svg">
    <path></path>
  </svg>
</hb-icon>
```

```css
hb-icon::part(svg)
```

#### hb-icon custom color

theme 라는 속성으로 기본 테마컬러 적용하는 방법과 part로 커스텀 컬러를 적용할 수 있습니다.

```html
<hb-icon icon="ddd.svg" theme="primary"> </hb-icon>
```

```css
hb-icon::part(svg) {
  fill: var(--primary--30);
}
```
