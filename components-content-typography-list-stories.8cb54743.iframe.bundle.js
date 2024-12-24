"use strict";(self.webpackChunkheybit_ui_styled_components=self.webpackChunkheybit_ui_styled_components||[]).push([[9150],{"./src/components/content/typography/list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoneStory:()=>NoneStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>list_stories});var lit=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");lit.iv`.list>li{list-style-type:none}.list>li:not(:first-child){margin-top:5px;padding-top:5px}.list--dot>li{list-style-type:"▪";margin-left:7px;padding-left:8px}`;const list_stories={title:"Content/List",tags:["autodocs"],render:()=>(({})=>lit.dy`
    <ul>
      <li>This is a list.</li>
      <li>It appears completely unstyled.</li>
      <li>Structurally, it's still a list.</li>
      <li>However, this style only applies to immediate child elements.</li>
      <li>
        Nested lists:
        <ul>
          <li>are unaffected by this style</li>
          <li>will still show a bullet</li>
          <li>and have appropriate left margin</li>
        </ul>
      </li>
      <li>This may still come in handy in some situations.</li>
    </ul>

    <ul class="list list--dot">
      <li>This is a list.</li>
      <li>It appears completely unstyled.</li>
      <li>Structurally, it's still a list.</li>
      <li>However, this style only applies to immediate child elements.</li>
      <li>
        Nested lists:
        <ul>
          <li>are unaffected by this style</li>
          <li>will still show a bullet</li>
          <li>and have appropriate left margin</li>
        </ul>
      </li>
      <li>This may still come in handy in some situations.</li>
    </ul>
  `)({})},NoneStory={args:{}};NoneStory.parameters={...NoneStory.parameters,docs:{...NoneStory.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...NoneStory.parameters?.docs?.source}}};const __namedExportsOrder=["NoneStory"]}}]);