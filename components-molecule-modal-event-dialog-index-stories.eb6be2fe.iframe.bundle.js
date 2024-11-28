"use strict";(self.webpackChunkheybit_ui_styled_components=self.webpackChunkheybit_ui_styled_components||[]).push([[6876],{"./src/components/molecule/modal/event-dialog/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js"),_static_sample_desktop_png__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/components/molecule/modal/event-dialog/index.ts"),__webpack_require__("./static/sample-desktop.png"));const __WEBPACK_DEFAULT_EXPORT__={component:"hb-event-dialog",argTypes:{open:{options:[!0,!1],control:{type:"radio"}},persistent:{options:[!0,!1],control:{type:"radio"}}}},Primary={render:args=>{return props=args,lit__WEBPACK_IMPORTED_MODULE_0__.dy`
  <style>
    body {
      background: url(${_static_sample_desktop_png__WEBPACK_IMPORTED_MODULE_2__}) no-repeat top center;
    }
  </style>
  <hb-event-dialog
    ?open=${props.open}
    image=${props.image}
    href=${props.href}
    textLongClose=${props.textLongClose}
    textClose=${props.textClose}
  >
  </hb-event-dialog>
`;var props},args:{open:!0,persistent:!0,href:"https://www.heybit.io/harvest/",image:"https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png",textLongClose:"3일간 보지 않기",textClose:"닫기"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: args => Template(args),\n  args: {\n    open: true,\n    persistent: true,\n    href: 'https://www.heybit.io/harvest/',\n    image: 'https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png',\n    textLongClose: '3일간 보지 않기',\n    textClose: '닫기'\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/atom/loading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _class,_components_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/base.ts"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");(0,__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js").Mo)("hb-loading")(_class=class HbLoading extends _components_base__WEBPACK_IMPORTED_MODULE_0__.X{constructor(...args){super(...args),this.loaded=!1,this.delete=!1,this.duration=void 0,this.background=void 0,this.backgroundAccent=void 0}static get styles(){return[__webpack_require__("./src/components/atom/loading/style.scss").Z]}static get properties(){return{loaded:{type:Boolean,Reflect:!0},duration:{type:Number,Reflect:!0},background:{type:String,Reflect:!0},backgroundAccent:{type:String,Reflect:!0},width:{type:String,Reflect:!0},height:{type:String,Reflect:!0}}}async connectedCallback(){await super.connectedCallback(),this.ontransitionend=()=>this.delete?this.remove():this.setAttribute("done","")}render(){return lit__WEBPACK_IMPORTED_MODULE_1__.dy`
      <div
        style=${`--duration:${this.duration||2e3}ms;--background:${this.background||"var(--husc__black--200)"}; --background--accent:${this.backgroundAccent||"var(--husc__white--50)"}`}
        class="hb-loading__wall"
        part="wall"
      ></div>
    `}})},"./src/components/molecule/anchor/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>HbAnchor});var _class,lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js"),_components_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/base.ts");let HbAnchor=(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.Mo)("hb-anchor")(_class=class HbAnchor extends _components_base__WEBPACK_IMPORTED_MODULE_2__.X{constructor(...args){super(...args),this.href="",this.target="",this.text=void 0,this._disabled=!1}static get styles(){return[__webpack_require__("./src/components/molecule/anchor/style.scss").Z]}get disabled(){return this._disabled}set disabled(value){this._disabled=value,value?this.setAttribute("data-disabled",""):this.removeAttribute("data-disabled")}static get properties(){return{href:{type:String,Reflect:!0},target:{type:String,Reflect:!0},disabled:{type:Boolean,Reflect:!0}}}async connectedCallback(){await super.connectedCallback(),this.tabindex="0",this.onclick=this.adapterEvent}adapterEvent(event){if(!this.disabled){if(event.stopImmediatePropagation(),this.href){const a=document.createElement("a");return this.target&&(a.target=this.target),a.href=this.href,a.rel="noreferer noopener",a.click(),void a.remove()}this.onEvent(new CustomEvent("event"))}}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.dy`<slot part="slot" class="hb-anchor__slot"></slot>`}})||_class},"./src/components/molecule/img/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/atom/loading/index.ts");var _class,_components_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/base.ts"),lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");(0,__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js").Mo)("hb-img")(_class=class HbImg extends _components_base__WEBPACK_IMPORTED_MODULE_1__.X{constructor(...args){super(...args),this.src=void 0,this.alt=void 0,this.loadingWidth=void 0,this.loadingHeight=void 0,this.breakPoint=0,this.multiSource=0,this.pcPrefix="-pc",this.loaded=!1,this.error=!1}static get styles(){return[__webpack_require__("./src/components/molecule/img/style.scss").Z]}static get properties(){return{src:{type:String,reflect:!0},alt:{type:String,reflect:!0},loadingWidth:{type:Number,reflect:!0},loadingHeight:{type:Number,reflect:!0},multiSource:{type:Number,reflect:!0},breakPoint:{type:Number,reflect:!0},pcPrefix:{type:String,reflect:!0},loaded:{type:Boolean,reflect:!0},error:{type:Boolean,reflect:!0}}}get srcExt(){const number=this.src.lastIndexOf(".");return this.src.substring(number)}get srcName(){const number=this.src.lastIndexOf(".");return this.src.substring(0,number)}get set(){return Array(this.multiSource).fill(null)}get srcset(){return this.set.map(((_,i)=>{const j=i+1;return 1===j?`${this.srcName}${this.srcExt} 1x`:`${this.srcName}@${j}x${this.srcExt} ${j}x`})).join(",")}get pcSrcset(){return this.set.map(((_,i)=>{const j=i+1;return 1===j?`${this.srcName}${this.pcPrefix}${this.srcExt} 1x`:`${this.srcName}${this.pcPrefix}@${j}x${this.srcExt} ${j}x`})).join(",")}render(){return lit__WEBPACK_IMPORTED_MODULE_2__.dy`
      <hb-loading
        class="hb-img__loading"
        part="loading"
        ?loaded=${this.loaded||this.error}
        style="width:${this.loadingWidth}px; height:${this.loadingHeight}px;"
      ></hb-loading>
      <picture class="hb-img__picture" part="picture">
        ${this.multiSource>0?this.breakPoint>0?lit__WEBPACK_IMPORTED_MODULE_2__.dy`
                <source media=${`(max-width: ${this.breakPoint-1}px)`} srcset=${this.srcset} />
                <source media=${`(min-width: ${this.breakPoint}px)`} srcset=${this.pcSrcset} />
              `:lit__WEBPACK_IMPORTED_MODULE_2__.dy` <source srcset=${this.srcset} /> `:""}
        <img
          class="hb-img__picture__img"
          part="img"
          src=${this.src}
          alt=${this.alt}
          @error=${this.onError}
          @load=${this.onLoad}
          ?loaded=${this.loaded}
          ?error=${this.error}
        />
      </picture>
    `}onLoad(event){this.loaded=!0,this.dispatchEvent(new Event("load",event))}onError(event){this.error=!0,this.dispatchEvent(new Event("error",event))}})},"./src/components/molecule/modal/event-dialog/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/molecule/modal/index.ts");var _class,_components_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/base.ts"),lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js");(0,__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js").Mo)("hb-event-dialog")(_class=class HbEventDialog extends _components_base__WEBPACK_IMPORTED_MODULE_1__.X{constructor(...args){super(...args),this.width="400px",this.loadingWidth=400,this.loadingHeight=490,this.open=void 0,this.persistent=!0,this.hideCloseBtn=!0,this.image="",this.href="",this.textLongClose="3일간 보지않기",this.textClose="닫기",this.loaded=!1,this.cookieKey="main-popup"}static get styles(){return[__webpack_require__("./src/components/molecule/modal/event-dialog/style.scss").Z]}static get properties(){return{open:{type:Boolean,Reflect:!0},persistent:{type:Boolean,Reflect:!0},hideCloseBtn:{type:Boolean,Reflect:!0},width:{type:String,Reflect:!0},loadingWidth:{type:Number,Reflect:!0},loadingHeight:{type:Number,Reflect:!0},loaded:{type:Boolean,Reflect:!0},image:{type:String,Reflect:!0},textLongClose:{type:String,Reflect:!0},textClose:{type:String,Reflect:!0},cookieKey:{type:String,Reflect:!0},href:{type:String,Reflect:!0}}}get isOpen(){const open=document.cookie.indexOf(`${this.cookieKey}=`);return this.open&&-1===open}render(){return lit__WEBPACK_IMPORTED_MODULE_2__.dy`
      <hb-modal
        @close=${this.onClose}
        width=${this.width}
        ?open=${this.isOpen}
        ?persistent=${this.persistent}
        transitionType="zoom"
      >
        <div class="hb-event-dialog__container">
          ${this.hideCloseBtn?"":lit__WEBPACK_IMPORTED_MODULE_2__.dy` <button
                @click=${this.onClose}
                type="button"
                class="hb-event-dialog__close-btn"
                part="close-btn"
                id="close-btn"
              >
                <hb-icon icon="system/outline/close" size="small"></hb-icon>
              </button>`}
          <hb-anchor class="hb-event-dialog__container__anchor" href=${this.href}>
            <hb-img
              class="hb-event-dialog__container__img"
              src=${this.image}
              @load=${()=>this.loaded=!0}
              @error=${()=>this.loaded=!0}
              loadingWidth=${this.loadingWidth}
              loadingHeight=${this.loadingHeight}
            ></hb-img>
          </hb-anchor>
          ${this.loaded?lit__WEBPACK_IMPORTED_MODULE_2__.dy`<div class="hb-event-dialog__footer">
                <button @click=${this.adapterClose} class="hb-event-dialog__btn">
                  ${this.textLongClose}
                </button>
                <button @click=${this.onClose} class="hb-event-dialog__btn">
                  ${this.textClose}
                </button>
              </div>`:""}
        </div>
      </hb-modal>
    `}adapterClose(){document.cookie=`${this.cookieKey} = true; max-age=259200`,this.onClose()}onClose(){this.open=!1,this.removeAttribute("open"),this.onEvent(new CustomEvent("event"))}})},"./src/components/molecule/modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/molecule/anchor/index.ts"),__webpack_require__("./src/components/molecule/button/index.ts"),__webpack_require__("./src/components/molecule/img/index.ts");var _class,_components_base__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/base.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils.ts"),lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/decorators.js");const obj=[["auto","auto"],["0","auto"],["auto","0"]],verObj={middle:obj[0],top:obj[1],bottom:obj[2]},horObj={center:obj[0],right:obj[1],left:obj[2]};(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.Mo)("hb-modal")(_class=class HbModal extends _components_base__WEBPACK_IMPORTED_MODULE_3__.X{constructor(...args){super(...args),this.verticalAlign="middle",this.horizonAlign="center",this.transitionType=void 0,this.containerEl=void 0,this.width="0",this.height="0px",this.open=void 0,this.persistent=!1}static get styles(){return[__webpack_require__("./src/components/molecule/modal/style.scss").Z]}async connectedCallback(){await super.connectedCallback(),this.containerEl=await(0,_utils__WEBPACK_IMPORTED_MODULE_6__.sb)(this.shadowRoot,"container"),this.containerEl.onanimationend=event=>this.onAnimationEnd(event)}disconnectedCallback(){this.containerEl.onanimationend=()=>null}get position(){return`${verObj[this.verticalAlign][0]} ${horObj[this.horizonAlign][0]} ${verObj[this.verticalAlign][1]} ${horObj[this.horizonAlign][1]}`}static get properties(){return{open:{type:Boolean,reflect:!0},persistent:{type:Boolean,reflect:!0},width:{type:String,reflect:!0},height:{type:String,reflect:!0},transitionType:{type:String,reflect:!0},verticalAlign:{type:String,reflect:!0},horizonAlign:{type:String,reflect:!0}}}render(){return lit__WEBPACK_IMPORTED_MODULE_4__.dy`
      <hb-transition ?show=${this.open} id="modal-transition" type="fade">
        <div class="hb-modal__wrap" @click=${this.adapterOnClose} part="layer">
          <hb-transition
            ?show=${this.open}
            type=${this.transitionType}
            style="margin: ${this.position};"
          >
            <div
              class="hb-modal__container"
              style=${`--husc__modal__width: ${this.width}; min-height: ${this.height}`}
              id="container"
              part="container"
              @click=${this.stopPropagation}
            >
              <slot></slot>
            </div>
          </hb-transition>
        </div>
      </hb-transition>
    `}onAnimationEnd(event){this.classList.remove(event.animationName)}adapterOnClose(){if(this.persistent)return this.classList.add("shake");this.dispatchEvent(new CustomEvent("close"))}})},"./src/components/atom/loading/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv`.hb-loading{display:block;font-family:var(--husc__font__family);transition:opacity var(--husc__transition__duration--ms)}:host{display:block;font-family:var(--husc__font__family);transition:opacity var(--husc__transition__duration--ms)}:host([loaded]){opacity:0}.hb-loading[loaded]{opacity:0}:host([done]){display:none}.hb-loading[done]{display:none}.hb-loading__wall{overflow:hidden;position:relative;width:100%;height:100%;border-radius:var(--husc__border__radius);background:var(--background)}.hb-loading__wall::before{content:"";position:absolute;left:-120px;width:120px;height:100%;background:linear-gradient(to right,transparent 0,var(--background--accent) 50.52%,transparent 100%);opacity:.7;animation:skeleton-gradient var(--duration) cubic-bezier(.4,0,.2,1) infinite}@keyframes skeleton-gradient{100%{left:100%}}`},"./src/components/molecule/anchor/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv`.hb-anchor{font-weight:700;font-size:13px;font-family:var(--husc__font__family);line-height:16px;color:#a2a4a6;cursor:pointer;text-decoration:underline}:host([data-disabled]:not([data-loading])){cursor:not-allowed}.hb-anchor[data-disabled]:not([data-loading]){cursor:not-allowed}:host{font-weight:700;font-size:13px;font-family:var(--husc__font__family);line-height:16px;color:#a2a4a6;cursor:pointer;text-decoration:underline}`},"./src/components/molecule/img/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv`.hb-img{overflow:hidden;display:inline-block;font-size:0}:host{overflow:hidden;display:inline-block;font-size:0}.hb-img__picture__img{display:block;width:100%;height:100%;object-fit:contain;transition:opacity var(--husc__transition__duration--ms)}.hb-img__loading{position:absolute;pointer-events:none}`},"./src/components/molecule/modal/event-dialog/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv`.hb-event-dialog__container{position:relative;width:calc(100% - var(--husc__modal__margin)*2);margin:auto;max-height:calc(100vh - var(--husc__modal__margin) - var(--husc__modal__margin))}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.hb-event-dialog__container::-webkit-scrollbar{width:7px}.hb-event-dialog__container::-webkit-scrollbar-thumb{background-color:#bbb}.hb-event-dialog__container::-webkit-scrollbar-track{background-color:#e8e8e8}}.hb-event-dialog__container__img{display:block;border-radius:calc(var(--husc__border__radius)*5);background:0 0}.hb-event-dialog__container__anchor{display:block}.hb-event-dialog__close-btn{z-index:2;position:absolute;top:0;right:0;width:52px;height:52px;padding:0;border:0;opacity:.3;cursor:pointer;background:0 0}.hb-event-dialog__footer{display:flex;height:60px;justify-content:center;gap:48px;background:0 0}.hb-event-dialog__btn{padding:0;font-size:16px;font-weight:400;color:#fff;cursor:pointer;border:0;background:0 0}.hb-event-dialog__btn::before{content:"";position:absolute;width:1px;height:16px;margin-left:-25px;pointer-events:none;background:#fff}.hb-event-dialog__btn:first-child::before{display:none}`},"./src/components/molecule/modal/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/.pnpm/lit@2.8.0/node_modules/lit/index.js").iv`.hb-modal{display:flex;font-family:var(--husc__font__family)}:host{display:flex;font-family:var(--husc__font__family)}.hb-modal__wrap{position:fixed;top:0;right:0;bottom:0;left:0;display:flex}.hb-modal__wrap::before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;opacity:.8;background:var(--husc__dim__background__color)}.hb-modal__container{max-width:100vw;width:calc(var(--husc__modal__width) + var(--husc__modal__margin)*2)}.shake .hb-modal__container,:host(.shake) .hb-modal__container{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}`},"./static/sample-desktop.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/sample-desktop.81e30642.png"}}]);
//# sourceMappingURL=components-molecule-modal-event-dialog-index-stories.eb6be2fe.iframe.bundle.js.map