import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getChildren } from "../../../utils";
import { Base } from "../../base";

/**
 * @property open 온 오프
 * @property width
 * @property persistent
 * @property hideCloseBtn
 * @property icon
 * @property title
 * @slot content - optional, 내용
 * @slot button - optional, 버튼
 * @slot anchor - optional, 앵커
 * @csspart container
 * @csspart icon
 * @csspart title
 * @csspart content
 * @csspart buttons
 * @csspart anchor
 */
enum eventStatus {
  start,
  doing,
  done
}
@customElement("hb-carousel")
export class HbCarousel extends Base {
  static override get styles() {
    return [require("../../../styles/template/carousel/index.scss").default];
  }
  auto: Boolean = false
  infinite: Boolean = false
  rolling: Boolean = false
  draggable: boolean = false;
  clickable: boolean = false;
  moveable: boolean = false;
  index: number
  items: number
  visibleLength: number = 1
  itemElements: HTMLElement[]
  startPointer = {
    clientX: 0,
    clientY: 0,
  }
  diffClientX = 0
  eventStatus: eventStatus = eventStatus.done

  // get open() {
  //   return this._open;
  // }
  // set open(val: boolean) {
  //   if (this._open !== val) {
  //     this._open = val
  //     this.onToggle(val)
  //   }
  // }
   

  // @property()
  // value!: string;
  static get properties() {
    return {
      auto: { type: Boolean, Reflect: true },
      infinite: { type: Boolean, Reflect: true },
      rolling: { type: Boolean, Reflect: true },
      eventStatus: { type: Number, Reflect: true },
      diffClientX: { type: Number, Reflect: true },
      index: { type: Number, Reflect: true },
      items: { type: Number, Reflect: true },
      duration: { type: Boolean, Reflect: true },
      visibleLength: { type: Number, Reflect: true },
    };
  }

  get totalWidth () {
    return this.items / this.visibleLength * 100
  }

  get duration() {
    if (this.eventStatus === eventStatus.doing) return false
    return true
  }

  get itemPosition () {
    if (this.eventStatus === eventStatus.doing) {
      return `${(this.index / this.items * -100 * this.clientWidth) - this.diffClientX}px`
    }
    return `${this.index / this.items * -100}%` 
  }
  async customConnectedCallback() {
    this.itemElements = await getChildren(this.children);
    if (this.infinite) {
      this.itemElements.concat(this.itemElements).forEach((x, i) => {
        const element = document.createElement(x.tagName)
        element.innerHTML = x.innerHTML
        element.slot = i < this.itemElements.length ? 'fake-before' : 'fake-after'
        this.append(element)
      })
    }
    window.addEventListener('mouseup', this.onEventDoneBound)
    window.addEventListener('mousemove', this.onEventDoingBound)
  }
  disconnectedCallback() {
    window.removeEventListener('mouseup', this.onEventDoneBound)
    window.removeEventListener('mousemove', this.onEventDoingBound)
  }

  onEventDoneBound = this.onEventDone.bind(this)
  onEventDoingBound = this.onEventDoing.bind(this)

  onClick(event: MouseEvent) {
    if (!this.clickable) return
    if (this.moveable) {
      const {target} = event;
      if (target instanceof HTMLElement) {
        this.index = this.itemElements.findIndex((x:ChildNode) => target.isEqualNode(x))
      }
    }
    // this.dispatchEvent
  }

  onEventStart(event: MouseEvent) {
    if (this.eventStatus === eventStatus.done) this.eventStatus = eventStatus.start
    const {clientX , clientY} = event
    this.startPointer = {
      clientX,
      clientY
    }
  }
  onEventDone(event: MouseEvent) {
    if (this.eventStatus === eventStatus.doing) event.stopImmediatePropagation() // drag 했을때 클릭 이벤트 발생시키지 않기
    this.eventStatus = eventStatus.done
    console.log(this.eventStatus)
  }
  onEventDoing(event: MouseEvent) {
    if (this.eventStatus !== eventStatus.done) {
      const {clientX , clientY} = event
      const starterClientX = this.startPointer.clientX
      const starterClientY = this.startPointer.clientY
      const diff = starterClientX - clientX
      this.diffClientX = diff 
      if ((Math.abs(diff) > 10 || Math.abs(starterClientY - clientY) > 10) && this.eventStatus === eventStatus.start) this.eventStatus = eventStatus.doing
    }
  }

  render() {
    return html`
      <div class="hb-carousel__wrap${this.duration ? ` hb-carousel__wrap--duraion` : ''}" 
        @mousedown="${this.onEventStart}" 
        style="transform: translateX(${this.itemPosition});">
        ${this.infinite ? html`<slot class="hb-carousel__items hb-carousel__items--fake-before" name="fake-before" style="width: ${this.totalWidth}%;"></slot>` : ''}
        <slot class="hb-carousel__items" @click="${this.onClick}" style="width: ${this.totalWidth}%;"></slot>
        ${this.infinite ? html`<slot class="hb-carousel__items" name="fake-after" style="width: ${this.totalWidth}%;"></slot>` : ''}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-carousel": HbCarousel;
  }
}