[![NPM version](https://img.shields.io/npm/v/heybit-ui-styled-components.svg?style=flat)](https://npmjs.org/package/heybit-ui-styled-components)
[![NPM downloads](https://img.shields.io/npm/dm/heybit-ui-styled-components.svg?style=flat)](https://npmjs.org/package/heybit-ui-styled-components)

# [heybit-ui-styled-components](http://github.com/uprise-fin/heybit-ui-styled-components)

## [Preview](https://uprise-fin.github.io/heybit-ui-styled-components/)

## 설치 방법

```terminal
pnpm add heybit-ui-styled-components
```

## 목적

`heybit-ui-styled-components` 는 프론트엔드 프레임워크에 제약이 없는 라이브러리입니다. 헤이비트의 셀간 업무 효율을 위해 제작되었습니다.

## 세팅방법

```html
<script src="/node_modules/heybit-ui-styled-components/dist/src/module.js"></script>
```

## 사용법

1. [Preview](https://uprise-fin.github.io/heybit-ui-styled-components/)에서 사용할 컴포넌트를 확인.
2. 인터페이스를 통해 컴포넌트의 props 와 slots을 확인

```typescript
import { HbButtonProps } from 'heybit-ui-styled-components';
```

3. 적절한 사용

```typescript
const loginButtonProps: HbButtonProps = {
  theme: HbButtonTheme.primary,
  size: Size.large,
  type: HbButtonType.rectangle
};
```

```svelte
<hb-button {...loginButtonProps}>버튼텍스트를 입력해보아요~~</hb-button>

또는

<hb-button
  type={HbButtonType.rectangle}
  theme={HbButtonTheme.primary}
  size={HbButtonSize.large}
  >버튼텍스트를 입력해보아요~~</hb-button
>

또는
<hb-button type="rectangle" theme="primary" size="large"
  >버튼텍스트를 입력해보아요~~</hb-button
>
```

## 배포방법

1. package.json 의 버전을 알맞게 올리고 main 브랜치에 PR & merged
2. 알맞은 tag를 푸시(npm registry 배포 및 storybook 배포)

```
1. git tag <tag-name>
2. git push origin <tag-name> OR
  git push origin --tags
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

```svelte
<!-- before -->
<hb-button ...></hb-button>

<!-- after -->
<hb-button class="hb-button" ...></hb-button>
```

## 디자인 시스템

피그마 링크: [figma](<https://www.figma.com/file/ykv0i8Yz2rxGqCOmbqR3ih/UI-Design-System-(Community)?node-id=185%3A690>)

## 컬러에 대해

피그마 라이브러리: [matercolors](https://www.figma.com/community/plugin/872008431843787391/Matercolor)

NPM 패키지: [matercolors](https://www.npmjs.com/package/matercolors)

동일한 라이브러리를 이용하여 동일한 컬러를 사용중입니다.

## 아이콘에 대해

svg이미지를 이용해 icon object를 만들고 <hb-icon> 컴포넌트에서 사용합니다.
`svg/assetsToJs.js`을 실행하면 assets폴더내의 모든 svg파일을 폴더구조 및 파일명으로 이루어진 변수를 `components/molecule/icon/svg.ts` 파일로 생성합니다.

### 아이콘 생성 시 주의사항

svg 아이콘을 이용해 쉽게 컬러 및 스타일을 적용하기 위해선 디자인팀과 협업이 중요합니다.
svg파일을 이룰때 내부 path를 하나로만 구성하는것이 필요한데, 이는 디자이너의 도움이 필요합니다.
아래처럼 두개의 패스로 이루어진 아이콘이 있다면 두 path를 한개로 병합을 요청해야
컴포넌트에서 정상 출력 및 컬러변경이 가능합니다.

```html
<svg>
  <path />
  <path />
</svg>
```

## 개발시 유의사항

### 릴리즈 전 테스트

storybook이나 demo로 테스트 후 해당 레포지토리에서 잘 작동하는지 확인해야 합니다. 그때마다 릴리즈하긴 번거로우니 pre-publish를 이용하여 빌드 후 dist폴더를 사용하려는 레포지토리의 node_modules/heybit-ui-styled-components/ 에 덮어씌워 줍니다.

### 스벨트

1. 속성값이 반영되지 않을 때
   disabled같은 기존 존재하는 속성일 경우 반영하지 않을 수 있다.

```typescript
  // before
  static get properties() {
    return {
      ...
      disabled: {type: Boolean, Reflect: true},
    };
  }
  disabled = false;
  // before
```

```typescript
  // after
  static get properties() {
    return {
      ...
      disabled: {type: Boolean, Reflect: true},
    };
  }
  #disabled: boolean = false;

  get disabled() {
    return this.#disabled;
  }

  set disabled(value: boolean) {
    this.#disabled = value;
    if (value) this.setAttribute('data-disabled', '');
    else this.removeAttribute('data-disabled');
  }
```

2. 초기 속성이 반영 안되는 경우
   버튼의 size, theme 등, 초기 스타일을 지정 후 렌더링 했을때 반영안될때
   `initialAttributes`이 변수를 이용해서 렌더링 후에도 속성값에 반응하도록 처리

3. hb-input이 textarea를 쓴 이유

- password를 제외하면 모든 기능을 textarea로 대체할 수 있습니다.
- 가장 중요한 로그인기능에서 자동완성, 1password등이 작동하지 않아서 shadow-dom에서 input을 사용할 필요가 없어서 textarea로 고정합니다.
