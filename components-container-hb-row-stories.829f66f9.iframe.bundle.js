"use strict";(self.webpackChunkheybit_ui_styled_components=self.webpackChunkheybit_ui_styled_components||[]).push([[5215],{"./src/components/container/hb-row.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoneStory:()=>NoneStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>hb_row_stories});var lit=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");lit.iv`.hb-row{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;text-align:left}.hb-row>*{flex-grow:1}.hb-row__leading{order:-1;flex-grow:0}.hb-row__trailing{order:1;flex-grow:0;text-align:right;display:flex;align-items:center;gap:4px}.hb-row--top{align-items:flex-start}.hb-row--bottom{align-items:flex-end}.hb-row-label{color:var(--hb__black--600);font-weight:400;line-height:normal}.hb-row-value{color:var(--hb__black--800);font-weight:500;line-height:normal}`;const hb_row_stories={title:"Container/Hb-Row",tags:["autodocs"],render:args=>(({align})=>{const classed=["hb-row"];return align&&classed.push("hb-row--"+align),lit.dy`
    <div class="${classed.join(" ")}">
      <div class="hb-row__leading">Leading</div>
      <div class="hb-row__trailing">Trailing</div>

      <span class="content">리딩과 트레일링 있는 것</span>
    </div>

    <br />

    <div class="${classed.join(" ")}">
      <div class="hb-row__leading">Leading</div>
      <span class="content">리딩만 있는 것</span>
    </div>

    <br />

    <div class="${classed.join(" ")}">
      <div class="hb-row__trailing">Trailing</div>
      <span class="content">트레일링만 있는 것</span>
    </div>

    <br />

    <div class="${classed.join(" ")}">
      <span class="content">내용만 있는 것</span>
    </div>

    <br />

    <div class="${classed.join(" ")}">
      <div class="hb-row__leading">Leading</div>
      <div class="hb-row__trailing">Trailing</div>
    </div>

    <br />
    <div class="${classed.join(" ")}">
      <div class="hb-row__leading hb-row-label">Label</div>
      <div class="hb-row__trailing hb-row-value">Trailing</div>

      <span class="content">lable과 value에 대한 공통 정보</span>
    </div>

    <br />
    <div class="${classed.join(" ")}">
      <div class="hb-row__leading hb-row-label">Label</div>
      <div class="hb-row__trailing hb-row-value">Trailing</div>

      <span class="content"
        >lable과 value에 대한 공통 정보<br />
        줄넘김</span
      >
    </div>
  `})(args),controls:{hideNoControlsWarning:!0},argTypes:{align:{control:{type:"select"},options:["top","bottom"]}}},NoneStory={args:{}};NoneStory.parameters={...NoneStory.parameters,docs:{...NoneStory.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...NoneStory.parameters?.docs?.source}}};const __namedExportsOrder=["NoneStory"]}}]);
//# sourceMappingURL=components-container-hb-row-stories.829f66f9.iframe.bundle.js.map