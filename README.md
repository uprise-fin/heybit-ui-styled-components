# heybit-ui-styled-components

css

```html
<link
  rel="stylesheet"
  href="/node_modules/heybit-ui-styled-components/dist/initial.css"
/>
```

```javascript
import "/node_modules/heybit-ui-styled-components/dist/initial.css";

import "heybit-ui-styled-components/dist/components/forms/hb-input"; // selected
//or
import "heybit-ui-styled-components"; // all components
```

EEEE

1. theme
1. size
1. type
1. loading
1. disabled
1. error

XXX

1. 데코레이터를 안쓴이유
   스토리북 사용 시 properties를 써야 되서, 데코레이터제거하고 properties를 씀
1. css의 host관련
   호스트를 직접 사용하면 css 스타일만 사용할때에 적용되지 않습니다. 하여 `mixins host*`를 이용해야 합니다.
   host 자체를 스타일링 할때 `@include host-styled{}`
   host의 변경에 따른 내부 엘리먼트에 스타일링 할때 `@include hostchild-styled{}`
