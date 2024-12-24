"use strict";(self.webpackChunkheybit_ui_styled_components=self.webpackChunkheybit_ui_styled_components||[]).push([[5133],{"./src/components/atom/variable/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,several:()=>several});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js"),_type__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atom/variable/type.ts");const reverseLevels=[..._type__WEBPACK_IMPORTED_MODULE_1__.gr].reverse(),__WEBPACK_DEFAULT_EXPORT__={component:"hb-variable"},copy=color=>()=>{const variables=[..._type__WEBPACK_IMPORTED_MODULE_1__.gr].map((level=>`--${_type__WEBPACK_IMPORTED_MODULE_1__.O4}__${color}--${level}: ${_type__WEBPACK_IMPORTED_MODULE_1__.K5[color][level]};`)).join("");navigator.clipboard.writeText(variables).then((()=>{alert("Successfully copied this line.")}),(()=>{alert("Failed to copy.")}))},several=(()=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`
    <style>
      .table {
        display: table;
        width: 100%;
        overflow: auto;
      }
      .box {
        display: table-row;
      }
      .box__item {
        display: table-cell;
        overflow: hidden;
        padding: 30px;
        white-space: nowrap;
        text-align: center;
        vertical-align: middle;
        background: var(--background);
      }
      .box__item:before {
        content: attr(data-color);
      }
      .box__item:first-child {
        text-align: left;
      }
      .box__item:nth-child(1),
      .box__item:nth-child(2),
      .box__item:nth-child(3) {
        color: #fff;
      }
      .box__item--primary::before {
        content: 'P';
        font-size: 2em;
      }
      .box__item--reversal {
        color: #fff;
        background: #000;
      }
      .box__item--title {
        width: 100px;
      }
      .status{
        width: 100%;
        display: flex;
        gap: 35px;
      }
      .status__item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        flex: 1 0 auto;
        width: 130px;
        height: 130px;
        border-radius:100%;
        text-align: center;
        background: var(--background);
      }
      .status__item-title{
        font-size: 20px;
        font-weight: 700;
      }
      .status__item-content{
        margin:0;
        font-size: 12px;
        font-weight: 400;
      }
    </style>
    <div class="table">
      <div class="box">
        <div class="box__item box__item--title box__item--reversal">
          시스템컬러
        </div>
        ${reverseLevels.map((x=>lit__WEBPACK_IMPORTED_MODULE_0__.dy` <div class="box__item box__item--reversal">${x}</div> `))}
      </div>
      ${_type__WEBPACK_IMPORTED_MODULE_1__.EU.map((name=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`
            <div class="box">
              <div class="box__item box__item--title box__item--reversal">
                <button @click=${copy(name)}>Copy</button> ${name}: ${_type__WEBPACK_IMPORTED_MODULE_1__.w2[name]}
              </div>
              ${reverseLevels.map((x=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`
                    <div
                      style="--background: var(--${_type__WEBPACK_IMPORTED_MODULE_1__.O4}__${name}--${x})"
                      data-color="${_type__WEBPACK_IMPORTED_MODULE_1__.K5[name][x]}"
                      class="box__item ${_type__WEBPACK_IMPORTED_MODULE_1__.w2[name]===_type__WEBPACK_IMPORTED_MODULE_1__.K5[name][x]?"box__item--primary":""}"
                    ></div>
                  `))}
            </div>
          `))}
      <div class="box">
        <div class="box__item box__item--title box__item--reversal">
          서비스컬러
        </div>
        ${reverseLevels.map((x=>lit__WEBPACK_IMPORTED_MODULE_0__.dy` <div class="box__item box__item--reversal">${x}</div> `))}
      </div>
      ${_type__WEBPACK_IMPORTED_MODULE_1__.PH.map((name=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`
            <div class="box">
              <div class="box__item box__item--title box__item--reversal">
                <button @click=${copy(name)}>Copy</button>
                ${name}: ${_type__WEBPACK_IMPORTED_MODULE_1__.w2[name]}
              </div>
              ${reverseLevels.map((x=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`
                    <div
                      style="--background: var(--${_type__WEBPACK_IMPORTED_MODULE_1__.O4}__${name}--${x})"
                      data-color="${_type__WEBPACK_IMPORTED_MODULE_1__.K5[name][x]}"
                      class="box__item ${_type__WEBPACK_IMPORTED_MODULE_1__.w2[name]===_type__WEBPACK_IMPORTED_MODULE_1__.K5[name][x]?"box__item--primary":""}"
                    ></div>
                  `))}
            </div>
          `))}
      </div>
      <div class="status">
      ${Object.keys(_type__WEBPACK_IMPORTED_MODULE_1__.Bh).map((key=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`
            <dl class="status__item" style="--background: ${_type__WEBPACK_IMPORTED_MODULE_1__.Bh[key]}">
              <dt class="status__item-title">${key}</dt>
              <dd class="status__item-content">${_type__WEBPACK_IMPORTED_MODULE_1__.Bh[key]}</dd>
            </dl>
          `))}
      </div>
    </div>
  `).bind({});several.parameters={...several.parameters,docs:{...several.parameters?.docs,source:{originalSource:'() => html`\n    <style>\n      .table {\n        display: table;\n        width: 100%;\n        overflow: auto;\n      }\n      .box {\n        display: table-row;\n      }\n      .box__item {\n        display: table-cell;\n        overflow: hidden;\n        padding: 30px;\n        white-space: nowrap;\n        text-align: center;\n        vertical-align: middle;\n        background: var(--background);\n      }\n      .box__item:before {\n        content: attr(data-color);\n      }\n      .box__item:first-child {\n        text-align: left;\n      }\n      .box__item:nth-child(1),\n      .box__item:nth-child(2),\n      .box__item:nth-child(3) {\n        color: #fff;\n      }\n      .box__item--primary::before {\n        content: \'P\';\n        font-size: 2em;\n      }\n      .box__item--reversal {\n        color: #fff;\n        background: #000;\n      }\n      .box__item--title {\n        width: 100px;\n      }\n      .status{\n        width: 100%;\n        display: flex;\n        gap: 35px;\n      }\n      .status__item{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        color: #fff;\n        flex: 1 0 auto;\n        width: 130px;\n        height: 130px;\n        border-radius:100%;\n        text-align: center;\n        background: var(--background);\n      }\n      .status__item-title{\n        font-size: 20px;\n        font-weight: 700;\n      }\n      .status__item-content{\n        margin:0;\n        font-size: 12px;\n        font-weight: 400;\n      }\n    </style>\n    <div class="table">\n      <div class="box">\n        <div class="box__item box__item--title box__item--reversal">\n          시스템컬러\n        </div>\n        ${reverseLevels.map(x => html` <div class="box__item box__item--reversal">${x}</div> `)}\n      </div>\n      ${systemColors.map((name: CreateColor) => html`\n            <div class="box">\n              <div class="box__item box__item--title box__item--reversal">\n                <button @click=${copy(name)}>Copy</button> ${name}: ${primaryColors[name]}\n              </div>\n              ${reverseLevels.map(x => html`\n                    <div\n                      style="--background: var(--${prefix}__${name}--${x})"\n                      data-color="${colorPalette[name][x]}"\n                      class="box__item ${primaryColors[name] === colorPalette[name][x] ? \'box__item--primary\' : \'\'}"\n                    ></div>\n                  `)}\n            </div>\n          `)}\n      <div class="box">\n        <div class="box__item box__item--title box__item--reversal">\n          서비스컬러\n        </div>\n        ${reverseLevels.map(x => html` <div class="box__item box__item--reversal">${x}</div> `)}\n      </div>\n      ${serviceColors.map((name: CreateColor) => html`\n            <div class="box">\n              <div class="box__item box__item--title box__item--reversal">\n                <button @click=${copy(name)}>Copy</button>\n                ${name}: ${primaryColors[name]}\n              </div>\n              ${reverseLevels.map(x => html`\n                    <div\n                      style="--background: var(--${prefix}__${name}--${x})"\n                      data-color="${colorPalette[name][x]}"\n                      class="box__item ${primaryColors[name] === colorPalette[name][x] ? \'box__item--primary\' : \'\'}"\n                    ></div>\n                  `)}\n            </div>\n          `)}\n      </div>\n      <div class="status">\n      ${Object.keys(statusColors).map((key: SystemTheme) => html`\n            <dl class="status__item" style="--background: ${statusColors[key]}">\n              <dt class="status__item-title">${key}</dt>\n              <dd class="status__item-content">${statusColors[key]}</dd>\n            </dl>\n          `)}\n      </div>\n    </div>\n  `',...several.parameters?.docs?.source}}};const __namedExportsOrder=["several"]},"./src/components/atom/variable/type.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bh:()=>statusColors,EU:()=>systemColors,J7:()=>sizes,K5:()=>colorPalette,O4:()=>prefix,PH:()=>serviceColors,Z5:()=>horizonAligns,_i:()=>systemThemes,componentVariables:()=>componentVariables,gr:()=>levels,tC:()=>basicVariables,w2:()=>primaryColors});var matercolors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/matercolors@2.3.0/node_modules/matercolors/dist/index.mjs");const prefix="hb",levels=[50,100,200,300,400,500,600,700,800,900],horizonAligns=["center","right","left"],sizes=["xsmall","small","medium","large","xlarge"],systemColors=["black","brown","yellow","red","green","blue","purple"],serviceColors=["heybit","harvest","reward"],systemThemes=["primary","secondary","success","warning","danger","info"],statusColors={primary:"#FF7D41",secondary:"#36373a",success:"#00A652",warning:"#FFC93A",danger:"#F8452A",info:"#0095FF"},primaryColors={black:"#36373a",brown:"#665b53",yellow:"#fea930",red:"#f55447",green:"#33b46b",blue:"#1a73e8",purple:"#8a6df4",heybit:"#ff7d41",harvest:"#54aa6c",reward:"#6872ef"},colorPalette=Object.entries({black:"#36373a",brown:"#A3978E",yellow:"#FB7D28",red:"#CC281D",green:"#8ED2A6",blue:"#1386FC",purple:"#DED5FE",heybit:"#C04707",harvest:"#114D24",reward:"#848EF3"}).reduce(((a,[name,color])=>({...a,[name]:new matercolors__WEBPACK_IMPORTED_MODULE_0__.Z(color)})),{}),basicVariables={font:{family:'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,\n  "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",\n  "Malgun Gothic", sans-serif',color:{void:"#FFFFFF",solid:colorPalette.black[800]},size:16},size:{xlarge:40,large:32,medium:24,small:18,xsmall:16},layout:{gutter:20,media:1020,"content-width":{"--mobile":460,"--desktop":1024}},border:{width:1,color:colorPalette.black[200],radius:4},background:{color:"#FFFFFF"},transition:{duration:{"--ms":"300ms"},type:"ease","delay-start":{"--ms":"0ms"},"delay-end":{"--ms":"0ms"}}},componentVariables={dim:{background:{color:colorPalette.black[800]}},list:{height:50,padding:{right:18,left:18},font:{size:basicVariables.font.size},border:{width:basicVariables.border.width,color:basicVariables.border.color}},icon:{color:colorPalette.black[800],size:basicVariables.size},input:{minHeight:50,maxHeight:71,border:{width:basicVariables.border.width,"width--error":2*basicVariables.border.width,"width--focus":2*basicVariables.border.width,color:basicVariables.border.color,"color--error":"#FF5252","color--disabled":colorPalette.black[100],"color--focus":colorPalette.black[800]},padding:{top:13.5,bottom:13.5,right:18,left:18},font:{size:basicVariables.font.size,color:{"--placeholder":colorPalette.black[400]}}},button:{padding:{right:10,left:10},font:{size:basicVariables.font.size}},modal:{width:{sheet:375,dialog:280},margin:20,background:"#FFFFFF",dialog:{"padding-top":52,"padding-right":20,"padding-bottom":24,"padding-left":20},"sheet-dialog":{"padding-top":52,"padding-right":20,"padding-bottom":30,"padding-left":20}},spinner:{color:colorPalette.black[800],size:basicVariables.size},select:{font:{size:basicVariables.font.size}},toast:{"max-width":340,"min-height":52,margin:{left:20,right:20,top:10,bottom:10},padding:{top:16,bottom:16,right:18,left:19},positive:{icon:"system/filled/info",color:colorPalette.green[400]},negative:{icon:"system/filled/danger",color:colorPalette.red[600]}},header:{height:{"--mobile":60,"--desktop":72},logo:{width:{"--mobile":77,"--desktop":80}}}}}}]);