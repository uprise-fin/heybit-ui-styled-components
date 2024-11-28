"use strict";(self.webpackChunkheybit_ui_styled_components=self.webpackChunkheybit_ui_styled_components||[]).push([[8839],{"./src/components/molecule/combo/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _class,lit=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js"),list=__webpack_require__("./src/components/atom/list/index.ts"),base=(__webpack_require__("./src/components/atom/transition/index.ts"),__webpack_require__("./src/components/base.ts")),input=__webpack_require__("./src/components/molecule/input/index.ts"),utils=__webpack_require__("./src/utils.ts");(0,__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js").Mo)("hb-combo")(_class=class HbCombo extends base.X{constructor(...args){super(...args),this.inputEl=void 0,this.parentQuery=void 0,this.parentEl=void 0,this.attributeSync=!1,this.fixed=!1,this.search=!1,this.open=!1,this.top=void 0,this.left=void 0,this.width=void 0,this.maxHeight=void 0,this.value="",this.options=[],this.placeholder="검색어를 입력해주세요.",this.emptyText="검색결과가 없습니다.",this.hasFocus=!1,this.inputValue="",this.resolve=()=>{},this.onScrollBound=this.onScroll.bind(this)}static get styles(){return[__webpack_require__("./src/components/molecule/combo/style.scss").Z]}static get properties(){return{open:{type:Boolean,Reflect:!0},search:{type:Boolean,Reflect:!0},attributeSync:{type:Boolean,Reflect:!0},fixed:{type:Boolean,Reflect:!0},top:{type:Number,Reflect:!0},left:{type:Number,Reflect:!0},width:{type:Number,Reflect:!0},maxHeight:{type:Number,Reflect:!0},value:{type:String,Reflect:!0},options:{type:Array,Reflect:!0},emptyText:{type:String,Reflect:!0},inputValue:{type:String,Reflect:!0},parentQuery:{type:String,Reflect:!0},hasFocus:{type:Boolean,Reflect:!0}}}get list(){return this.options?.filter((x=>x.label.includes(this.inputValue)))||[]}get values(){return this.options?.map((x=>x.value))||[]}get label(){return this.hasFocus||!this.options?this.inputValue:this.options?.find((x=>x.value===this.value))?.label||""}get scrollEventListener(){return this.parentQuery?this.parentEl:window}render(){return lit.dy`
      <hb-input
        class="hb-combo__label"
        id="label"
        part="label"
        class="hb-combo__input"
        ?readonly=${!this.search}
        value=${this.label}
        placeholder=${this.placeholder}
        @event=${this.onInput}
      >
        <slot name="icon" class="hb-combo__label--icon"></slot>
        <hb-icon slot="slot--right" icon="system/outline/arrow-dropdown" size="small"></hb-icon>
      </hb-input>
      <hb-transition id="select-transition" ?show=${this.open} type="fade">
        <hb-list
          tabindex="0"
          emptyText=${this.emptyText}
          id="list"
          class="hb-combo__list${this.open?" hb-combo__list--open":""}"
          style="width: ${this.width}px;transform: translate(${this.left}px,${this.top}px);"
          @event=${this.onSelect}
          .options=${this.list}
          .value=${this.value}
        ></hb-list>
      </hb-transition>
    `}async connectedCallback(){await super.connectedCallback(),this.onfocus=()=>this.adapterShow(),this.onblur=()=>this.onHide(),this.inputEl=await(0,utils.sb)(this.shadowRoot,"label"),this.parentQuery&&(this.parentEl=document.querySelector(this.parentQuery))}disconnectedCallback(){this.onfocus=()=>null,this.onblur=()=>null}onScroll(){const{bottom}=this.getBoundingClientRect();bottom>100&&(this.maxHeight=window.innerHeight-bottom-50),this.top=-(this.parentEl?this.parentEl?.scrollTop:window.scrollY),this.left=-(this.parentEl?this.parentEl?.scrollLeft:window.scrollX)}onInput(ev){const{target}=ev;target instanceof input.Z&&(this.inputValue=target.value)}onSelect(ev){ev.stopImmediatePropagation();const{target}=ev;if(!(target instanceof list.B))return;const{value}=target;this.attributeSync&&this.setAttribute("value",value),this.value=value,this.onEvent(new CustomEvent("event")),this.resolve()}onShow(){const{width}=this.getBoundingClientRect();this.open=!0,this.width=width,this.search&&(this.hasFocus=!0,this.inputValue=""),this.fixed&&(this.onScroll(),this.scrollEventListener.addEventListener("scroll",this.onScrollBound))}async adapterShow(){this.onShow(),await new Promise((resolve=>this.resolve=resolve)),this.onHide()}onHide(){this.blur(),this.open=!1,this.search&&(this.hasFocus=!1),this.fixed&&this.scrollEventListener.removeEventListener("scroll",this.onScrollBound)}});const index_stories={title:"Dev/hb-combo"},Primary={render:args=>(({value,search,options,fixed,emptyText,placeholder})=>lit.dy`
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
      <hb-combo
        value=${value}
        ?fixed=${fixed}
        ?search=${search}
        .emptyText=${emptyText}
        .options=${options}
        .placeholder=${placeholder}
        @event=${$event=>console.log($event)}
      ></hb-combo>
    </div>
  `)(args),args:{search:!1,fixed:!1,value:void 0,placeholder:"블라블라",emptyText:"내용이없습니다.",options:[{label:"1번",value:"1"},{label:"2번",value:"2"},{label:"3번",value:"3"},{label:"4번",value:"4"},{label:"5번",value:"5"},{label:"6번",value:"6"},{label:"7번",value:"7"},{label:"8번",value:"8"},{label:"9번",value:"9"},{label:"10번",value:"10"},{label:"11번",value:"11"},{label:"12번",value:"12"},{label:"13번",value:"13"},{label:"14번",value:"14"},{label:"15번",value:"15"},{label:"16번",value:"16"},{label:"17번",value:"17"},{label:"18번",value:"18"},{label:"19번",value:"19"},{label:"20번",value:"20"},{label:"21번",value:"21"},{label:"22번",value:"22"},{label:"23번",value:"23"},{label:"24번",value:"24"}]}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: args => OpionSlotTmpl(args),\n  args: {\n    search: false,\n    fixed: false,\n    value: undefined,\n    // options: undefined,\n    placeholder: '블라블라',\n    emptyText: '내용이없습니다.',\n    options: [{\n      label: '1번',\n      value: '1'\n    }, {\n      label: '2번',\n      value: '2'\n    }, {\n      label: '3번',\n      value: '3'\n    }, {\n      label: '4번',\n      value: '4'\n    }, {\n      label: '5번',\n      value: '5'\n    }, {\n      label: '6번',\n      value: '6'\n    }, {\n      label: '7번',\n      value: '7'\n    }, {\n      label: '8번',\n      value: '8'\n    }, {\n      label: '9번',\n      value: '9'\n    }, {\n      label: '10번',\n      value: '10'\n    }, {\n      label: '11번',\n      value: '11'\n    }, {\n      label: '12번',\n      value: '12'\n    }, {\n      label: '13번',\n      value: '13'\n    }, {\n      label: '14번',\n      value: '14'\n    }, {\n      label: '15번',\n      value: '15'\n    }, {\n      label: '16번',\n      value: '16'\n    }, {\n      label: '17번',\n      value: '17'\n    }, {\n      label: '18번',\n      value: '18'\n    }, {\n      label: '19번',\n      value: '19'\n    }, {\n      label: '20번',\n      value: '20'\n    }, {\n      label: '21번',\n      value: '21'\n    }, {\n      label: '22번',\n      value: '22'\n    }, {\n      label: '23번',\n      value: '23'\n    }, {\n      label: '24번',\n      value: '24'\n    }]\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/atom/list/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>HbList});var _class,_components_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/base.ts"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");let HbList=(0,__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js").Mo)("hb-list")(_class=class HbList extends _components_base__WEBPACK_IMPORTED_MODULE_0__.X{constructor(...args){super(...args),this.options=[],this.attributeSync=!1,this.open=!1,this.value="",this.emptyText="",this.width=0,this.maxHeight=0,this.sto=setTimeout((()=>{}),0)}static get styles(){return[__webpack_require__("./src/components/atom/list/style.scss").Z]}static get properties(){return{options:{type:Array,Reflect:!0},value:{type:String,Reflect:!0},emptyText:{type:String,Reflect:!0},width:{type:Number,Reflect:!0},maxHeight:{type:Number,Reflect:!0},attributeSync:{type:Boolean,Reflect:!0},open:{type:Boolean,Reflect:!0}}}get values(){return this.options.map((x=>x.value))||[]}onSelect(ev){if(this.adapterHide(),!(ev.target instanceof HTMLButtonElement))return;const{target}=ev,{value}=target.dataset;this.value!==value&&this.values.includes(value)&&(this.attributeSync&&this.setAttribute("value",value),this.value=value,this.onEvent(new CustomEvent("event")))}onHide(){this.blur(),this.open=!1}adapterHide(){this.sto=setTimeout((()=>this.onHide()),0)}render(){return lit__WEBPACK_IMPORTED_MODULE_1__.dy`
      <div
        class="hb-list__wrap${this.options?.length?"":" hb-list__wrap--empty"}"
        @click=${this.onSelect}
        @keyup=${evt=>"Enter"===evt.key&&this.onSelect.call(this)}
        data-empty-text=${this.emptyText}
        part="list"
        id="list"
      >
        ${this.options?.map((x=>lit__WEBPACK_IMPORTED_MODULE_1__.dy`
              <button
                tabindex="0"
                type="button"
                class="hb-list__btn"
                ?data-selected=${x.value===this.value}
                data-value=${x.value}
              >
                ${x.label}
              </button>
            `))}
      </div>
    `}})||_class},"./src/components/atom/list/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv``},"./src/components/molecule/combo/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv`.hb-select{display:block;font-family:var(--husc__font__family);font-size:var(--husc__select__font__size)}:host{display:block;font-family:var(--husc__font__family);font-size:var(--husc__select__font__size)}.hb-select__select{position:absolute;height:50px;margin-top:-50px;opacity:0}.hb-select__list{position:absolute;pointer-events:none;max-height:70vh}:host([fixed]) .hb-select__list,[fixed] .hb-select__list{position:fixed;will-change:transform}.hb-select__list--open{pointer-events:auto}.hb-select__label{cursor:pointer}.hb-select__list--open .hb-select__label:not(:read-only),:host(.hb-select__list--open) .hb-select__label:not(:read-only){cursor:auto}`}}]);
//# sourceMappingURL=components-molecule-combo-index-stories.7f194afc.iframe.bundle.js.map