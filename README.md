# heybit-ui-styled-components

### [데모 페이지 확인하기](https://uprise-fin.github.io/heybit-ui-styled-components/)

## 목적

해당 컴포넌트는 헤이비트의 메트릭스구조에서 프론트엔드의 개발환경 및 결과물에 완성도를 위해 만들었습니다.

1. 프론트엔드개발자가 사용하기 편한 ui components
   여느 라이브러리도 헤이비트 디자인에 최적화될 수 없습니다. 디자인은 계속해서 변경되고 그때마다 가져다 쓴 라이브러리의 디자인 개선건은 골칫거리입니다. 그래서 가장 헤이비트디자인에 최적화되어 프론트엔드개발자가 어느 라이브러리보다도 사용하기 편한 컴포넌트를 지향합니다.
2. 디자인의 통일성
   동일한 컴포넌트의 스타일속성이 다를 수 있고 결과물또한 조금씩 차이가 날 수 있습니다. 기본적인 컴포넌트를 제공함으로써 룩엔필에 완성도를 높입니다.

## 사용법

기본적으로 javascript만 사용해도 문제는 없습니다. 스타일만 사용하고 쉐도우돔은 사용하지 않을 시 스타일만 따로 가져다 쓸 수 있습니다.

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
import "heybit-ui-styled-components/dist/components/organism/hb-input"; // part
//or
import "heybit-ui-styled-components"; // all components
```

### 사용 시 주의사항

넉스트에서 ssr 활성화 시 window에러가 나는데, 이거는 라이프사이클에서 window가 있을때 require방식으로 주입하는 방법으로 해결 가능합니다.

1. property 데코레이터를 안쓴이유
   ㄱ. 스토리북 사용 시 properties를 써야 되서, 데코레이터제거하고 properties를 씀
   ㄴ. number에 대해 오류가 남(아마 boolean도 그럴듯)
1. css의 host관련
   호스트를 직접 사용하면 css 스타일만 사용할때에 적용되지 않습니다. 하여 `mixins host*`를 이용해야 합니다.
   host 자체를 스타일링 할때 `@include host-styled{}`
   host의 변경에 따른 내부 엘리먼트에 스타일링 할때 `@include child-styled{}`

#### css part

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

### 제작 시 주의사항

#### mixin 이용하기

host-styled, slot-styled 같은 믹싱을 이용하여 스타일 처리를 해야
컴포넌트를 css로만도 제공이 가능합니다.
쉐도우돔과 일반돔의 차이는
부모가 처음 돔이 태그 이름이냐(`hb-button`) 호스트냐(`:host`)의 차이와
슬럿 내부 접근 시에도(`:slot(*)`) 유의해야 하기 때문에 위의 믹싱을 이용하여 작업해야합니다.

#### position relative 지양하기

컴포넌트 생성 시 해당 돔을 기준으로 잡고 설계하면 많은 부분이 쉬워집니다.
하지만 그만큼 해결하기 어려운 문제도 야기되기때문에
relative를 주지 않는 방법으로 설계해야합니다.
