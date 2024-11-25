"use strict";(self.webpackChunkheybit_ui_styled_components=self.webpackChunkheybit_ui_styled_components||[]).push([[2477],{"./src/components/layout/section.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoneStory:()=>NoneStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _section__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/layout/section.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Section",tags:["autodocs"],render:()=>(0,_section__WEBPACK_IMPORTED_MODULE_0__.$)({}),controls:{hideNoControlsWarning:!0}},NoneStory={args:{}};NoneStory.parameters={...NoneStory.parameters,docs:{...NoneStory.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...NoneStory.parameters?.docs?.source}}};const __namedExportsOrder=["NoneStory"]},"./src/components/layout/section.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Section});var lit=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");lit.iv`.sction,section{width:100%;max-width:100%}`;const Section=({})=>lit.dy`
    <section class="section">
      <h1>Section 정보 입니다.</h1>

      <pre>
        페이지 전체 width를 가지고 있습니다.
        section에 배경색을 지정하면, width 전체에 적용됩니다.
        일반적으로 아래 두 구조로 생성됩니다.

        한 단짜리 레이아웃 입니다.
        section
          .containers
            panel
            card

        두 단짜리 레이아웃 입니다.
        가이드에서는 50% 비율의 2단만 지원합니다.
        section
          .containers
            .grid
              .grid-item
                panel
              .grid-item
                card
      </pre
      >
    </section>
  `}}]);