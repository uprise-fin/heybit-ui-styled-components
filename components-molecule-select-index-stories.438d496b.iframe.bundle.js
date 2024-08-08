"use strict";(self.webpackChunkheybit_ui_styled_components=self.webpackChunkheybit_ui_styled_components||[]).push([[4136],{"./src/components/molecule/select/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");__webpack_require__("./src/components/molecule/select/index.ts");const __WEBPACK_DEFAULT_EXPORT__={component:"hb-select"},Primary={render:args=>(({value,options,placeholder,emptyText,disabled})=>lit__WEBPACK_IMPORTED_MODULE_0__.dy`
    <style>
      .wrap {
        position: relative;
        display: inline-block;
        overflow: scroll;
        width: 500px;
        /* height: 900px; */
        padding: 30px;
        background: blue;
      }
    </style>
    <div class="wrap">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style="height: 299px;"></div>
      <hb-select
        value=${value}
        .emptyText=${emptyText}
        .placeholder=${placeholder}
        .options=${options}
        ?disabled=${disabled}
        @event=${$event=>console.log($event)}
      ></hb-select>
      <button @click=${()=>document.querySelector("hb-select").value="1"}>1 주입</button>
      <button @click=${()=>document.querySelector("hb-select").value="2"}>2 주입</button>
      <button @click=${()=>console.log(document.querySelector("hb-select").value)}>submit</button>
    </div>
  `)(args),args:{value:void 0,disabled:!1,emptyText:"블라블라",placeholder:"내용이없습니다.",options:[{label:"1번",value:"1"},{label:"2번",value:"2"},{label:"3번",value:"3"},{label:"4번",value:"4"},{label:"5번",value:"5"},{label:"6번",value:"6"},{label:"7번",value:"7"},{label:"8번",value:"8"},{label:"9번",value:"9"},{label:"10번",value:"10"},{label:"11번",value:"11"},{label:"12번",value:"12"},{label:"13번",value:"13"},{label:"14번",value:"14"},{label:"15번",value:"15"},{label:"16번",value:"16"},{label:"17번",value:"17"},{label:"18번",value:"18"},{label:"19번",value:"19"},{label:"20번",value:"20"},{label:"21번",value:"21"},{label:"22번",value:"22"},{label:"23번",value:"23"},{label:"24번",value:"24"}]}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: args => OpionSlotTmpl(args),\n  args: {\n    value: undefined,\n    disabled: false,\n    emptyText: '블라블라',\n    placeholder: '내용이없습니다.',\n    // options: []\n    options: [{\n      label: '1번',\n      value: '1'\n    }, {\n      label: '2번',\n      value: '2'\n    }, {\n      label: '3번',\n      value: '3'\n    }, {\n      label: '4번',\n      value: '4'\n    }, {\n      label: '5번',\n      value: '5'\n    }, {\n      label: '6번',\n      value: '6'\n    }, {\n      label: '7번',\n      value: '7'\n    }, {\n      label: '8번',\n      value: '8'\n    }, {\n      label: '9번',\n      value: '9'\n    }, {\n      label: '10번',\n      value: '10'\n    }, {\n      label: '11번',\n      value: '11'\n    }, {\n      label: '12번',\n      value: '12'\n    }, {\n      label: '13번',\n      value: '13'\n    }, {\n      label: '14번',\n      value: '14'\n    }, {\n      label: '15번',\n      value: '15'\n    }, {\n      label: '16번',\n      value: '16'\n    }, {\n      label: '17번',\n      value: '17'\n    }, {\n      label: '18번',\n      value: '18'\n    }, {\n      label: '19번',\n      value: '19'\n    }, {\n      label: '20번',\n      value: '20'\n    }, {\n      label: '21번',\n      value: '21'\n    }, {\n      label: '22번',\n      value: '22'\n    }, {\n      label: '23번',\n      value: '23'\n    }, {\n      label: '24번',\n      value: '24'\n    }]\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/molecule/select/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/atom/icon/index.ts");var _class,_components_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/base.ts"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils.ts"),lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");(0,__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js").Mo)("hb-select")(_class=class HbSelect extends _components_base__WEBPACK_IMPORTED_MODULE_1__.X{constructor(...args){super(...args),this.selectEl=void 0,this.disabled=void 0,this._value=void 0,this.options=[],this.placeholder="선택해주세요.",this.emptyText="데이터가 없습니다."}static get styles(){return[__webpack_require__("./src/components/molecule/select/style.scss").Z]}static get properties(){return{_value:{type:String,Reflect:!0},value:{type:String,Reflect:!0},disabled:{type:Boolean,Reflect:!0},options:{type:Array,Reflect:!0},placeholder:{type:String,Reflect:!0},emptyText:{type:String,Reflect:!0}}}async connectedCallback(){await super.connectedCallback();const selectEl=await(0,_utils__WEBPACK_IMPORTED_MODULE_4__.sb)(this.shadowRoot,"select");this.tabIndex=0,this.selectEl=selectEl,this.onclick=()=>selectEl.focus(),this.addEventListener("focus",(()=>{this.setAttribute("data-focus",""),this.selectEl.focus()})),this.addEventListener("blur",(()=>this.removeAttribute("data-focus")))}get list(){const placeholder=[{value:void 0,label:this.placeholder,disabled:!0}];return this.options?.length?placeholder.concat(this.options):[{value:null,label:this.emptyText,disabled:!0}]}set value(value){this._value!==value&&(this.focus(),this._value=value,this.blur())}get value(){return this._value}render(){return lit__WEBPACK_IMPORTED_MODULE_2__.dy`
      <select
        id="select"
        class=${"hb-select__el"+(this._value?"":" hb-select__el--init")}
        @change=${this.onSelect}
        ?disabled=${this.disabled}
      >
        ${this.list.map(((x,i)=>lit__WEBPACK_IMPORTED_MODULE_2__.dy`
              <option
                ?selected=${this._value?this._value===x.value:0===i}
                value=${x.value}
                ?disabled=${x.disabled}
              >
                ${x.label}
              </option>
            `))}
      </select>
      <span class="hb-select__icon-wrap">
        <hb-icon
          class="hb-select__icon-wrap__el"
          icon="system/outline/arrow-dropdown"
          size="small"
        ></hb-icon>
      </span>
    `}onSelect(ev){ev.stopImmediatePropagation();const{target}=ev;if(!(target instanceof HTMLSelectElement))return;const{value}=target;this.value=value,this.onEvent(new CustomEvent("event"))}attributeChangedCallback(name,oldVal,newVal){"value"===name&&oldVal!==newVal&&this.onSelect(new Event("change")),super.attributeChangedCallback(name,oldVal,newVal)}})},"./src/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getChildren(children,timer){const index="number"==typeof timer?++timer:0;return 0===children.length&&index<10?new Promise((resolve=>{setTimeout((()=>{resolve(getChildren(children,index))}),10*index)})):new Promise((resolve=>resolve(Array.call(null,...Array.from(children)))))}function getElement(root,id,timer){const index="number"==typeof timer?++timer:0,element=root?.getElementById(id);return new Promise(!element&&index<10?resolve=>{setTimeout((()=>{resolve(getElement(root,id,index))}),100*index)}:resolve=>resolve(element))}function wait(time=500){return new Promise((resolve=>{setTimeout((()=>{resolve()}),time)}))}__webpack_require__.d(__webpack_exports__,{Dc:()=>wait,G:()=>getChildren,sb:()=>getElement})},"./src/components/molecule/select/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv`.hb-select{display:flex;border-radius:calc(var(--husc__border__radius)*2);border:var(--husc__input__border__width) solid var(--husc__input__border__color);background:var(--husc__background__color)}:host{display:flex;border-radius:calc(var(--husc__border__radius)*2);border:var(--husc__input__border__width) solid var(--husc__input__border__color);background:var(--husc__background__color)}.hb-select__el{display:flex;width:100%;min-height:var(--husc__input__minHeight);max-height:var(--husc__input__maxHeight);align-items:center;color:var(--husc__black--800);padding:var(--husc__input__padding__top) calc(var(--husc__input__padding__right)*3) var(--husc__input__padding__bottom) var(--husc__input__padding__left);cursor:pointer;font-size:var(--husc__input__font__size);font-family:var(--husc__font__family);box-sizing:border-box;border:0;background:0 0;transition:border-color var(--husc__transition__duration--ms);appearance:none}.hb-select__el--init{color:var(--husc__input__font__color--placeholder)}.hb-select__icon-wrap{width:0;pointer-events:none}.hb-select__icon-wrap__el{height:100%;transform:translateX(-200%)}`}}]);
//# sourceMappingURL=components-molecule-select-index-stories.438d496b.iframe.bundle.js.map