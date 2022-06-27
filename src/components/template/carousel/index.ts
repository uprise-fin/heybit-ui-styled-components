import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getChildren, wait } from "../../../utils";
import { Base } from "../../base";
// TODO 롤링 구현
// TODO 인피니트 구현
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
  done,
  fake
}
@customElement("hb-carousel")
export class HbCarousel extends Base {
  static override get styles() {
    return [require("../../../styles/template/carousel/index.scss").default];
  }
  auto: Boolean = false
  pause: Boolean = false
  infinite: Boolean = false
  rolling: Boolean = false
  draggable: boolean = false;
  clickable: boolean = false;
  moveable: boolean = false;
  duration: number = 3000
  speed: number = 300
  _userIndex: number // 인피니트등에 쓰이기 위해 내부에서 실제로 사용하는 인덱스
  index: number // 현재 인덱스
  items: number
  visibleLength: number = 1
  itemElements: HTMLElement[]
  startPointer = {
    clientX: 0,
    clientY: 0,
  }
  diffClientX = 0
  eventStatus: eventStatus = eventStatus.done
  sto: any

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
      pause: { type: Boolean, Reflect: true },
      infinite: { type: Boolean, Reflect: true },
      rolling: { type: Boolean, Reflect: true },
      draggable: { type: Boolean, Reflect: true },
      eventStatus: { type: Number, Reflect: true },
      diffClientX: { type: Number, Reflect: true },
      index: { type: Number, Reflect: true },
      items: { type: Number, Reflect: true },
      transition: { type: Boolean, Reflect: true },
      visibleLength: { type: Number, Reflect: true },
      duration: { type: Number, Reflect: true },
      speed: { type: Number, Reflect: true },
    };
  }

  get totalWidth () {
    return this.items / this.visibleLength * 100
  }

  get transition() {
    if (this.eventStatus === eventStatus.done) return true
    return false
  }

  get positions(){
    const arrayLength = this.items * (this.infinite ? 3 : 1);
    const index = this.infinite ? - this.items : 0;
    return Array(arrayLength).fill(null).map((_,i) => i + index).map((x) => x * this.clientWidth / this.visibleLength)
  }

  set userIndex(index: number) {
    if (this.infinite) index -= this.items
    this._userIndex = index
  }
  get userIndex() {
    return this._userIndex
  }

  get transitionDuration() {
    if (this.transition) return this.rolling ? this.duration : this.speed;
    return 0
  }

  get itemPosition() {
    const currentPosition = this.index * this.clientWidth / this.visibleLength
    if ([eventStatus.doing,eventStatus.fake].includes(this.eventStatus)) {
      this.userIndex = this.closeIndex(currentPosition + this.diffClientX);
      return `${-currentPosition - this.diffClientX}px`
    }
    
    return `${this.index / this.visibleLength * -100}%` 
  }
  async customConnectedCallback() {
    this.itemElements = await getChildren(this.children);
    if (this.infinite) {
      this.itemElements.forEach(element => {
        const cloneBefore = element.cloneNode(true) as HTMLElement;
        const cloneAfter = element.cloneNode(true) as HTMLElement;
        cloneBefore.setAttribute('slot','fake-before');
        cloneAfter.setAttribute('slot','fake-after');
        this.appendChild(cloneBefore);
        this.appendChild(cloneAfter);
      })
    }
    if (this.draggable) {
      this.addEventListener('mousedown', this.onEventStartBound)
      window.addEventListener('mouseup', this.onEventEndBound)
      window.addEventListener('mousemove', this.onEventDoingBound)
    }
    if(this.auto) {
      const step = this.rolling ? 1 : 0
      this.onAuto(step)
      if (this.pause) {
        this.onmouseenter = () => clearTimeout(this.sto)
        this.onmouseleave = () => this.onAuto(0)
      }
    }
  }
  disconnectedCallback() {
    if (this.draggable) {
      this.removeEventListener('mousedown', this.onEventStartBound)
      window.removeEventListener('mouseup', this.onEventEndBound)
      window.removeEventListener('mousemove', this.onEventDoingBound)
    }
  }

  onEventStartBound = this.onEventStart.bind(this)
  onEventEndBound = this.onEventEnd.bind(this)
  onEventDoingBound = this.onEventDoing.bind(this)

  async onAuto(step: number = 0): Promise<void> {
    let duration = this.duration
    clearTimeout(this.sto)
    if (this.index + step < this.items) {
      this.eventStatus !== eventStatus.done && (this.eventStatus = eventStatus.done);
      this.index += step
      step = 1
    } else {
      this.index = 0
      duration = 0
      step = 0
      if (this.infinite) {
        this.eventStatus = eventStatus.fake
        this.diffClientX = -this.clientWidth / this.visibleLength
        this.userIndex = this.items - 1
      }
    }
      
    this.sto = setTimeout(() => this.onAuto(step), duration)
  }

  onClick(event: MouseEvent) {
    if (!this.clickable) return
    if (this.moveable) {
      const {target} = event;
      if (target instanceof HTMLElement) this.index = this.itemElements.findIndex((x:ChildNode) => target.isEqualNode(x))
    }
    // this.dispatchEvent
  }

  onEventStart(event: MouseEvent) {
    if (this.eventStatus === eventStatus.done) {
      this.eventStatus = eventStatus.start
      const {clientX , clientY} = event
      this.startPointer = {
        clientX,
        clientY
      }
    }
  }
  onEventEnd(event: MouseEvent) {
    if (this.eventStatus === eventStatus.doing) {
      event.stopImmediatePropagation() // drag 했을때 클릭 이벤트 발생시키지 않기
      this.index = this.userIndex
      this.diffClientX = 0
    }
    this.eventStatus = eventStatus.done
  }
  closeIndex(position: number) {
    const diff = this.positions.map(x => this.diff(x, position))
    const closePosition = Math.min(...diff)
    let index = diff.findIndex(x => closePosition === x)
    const max = (this.items * 2) - 1 // 안전장치. 기본 인덱스 이상으로 안보이기
    const min = this.items // 기본 인덱스 이하로 안보이기
    if (index > max) index = max
    else if (index < min) index = min
    return index
  }
  diff(a: number,b:number) {
    return a > b  ? a - b : b - a
  }
  onEventDoing(event: MouseEvent) {
    if ([eventStatus.start,eventStatus.doing].includes(this.eventStatus)) {
      const {clientX , clientY} = event
      const starterClientX = this.startPointer.clientX
      const starterClientY = this.startPointer.clientY
      this.diffClientX = starterClientX - clientX 
      if (this.eventStatus === eventStatus.start)
        if ((this.diff(starterClientX, clientX) > 10 || this.diff(starterClientY, clientY) > 10)) this.eventStatus = eventStatus.doing // 드레그가 시작됐다고 판단하는 움직임 +- 10
      // if ((this.diff(starterClientX, clientX) > 10 || this.diff(starterClientY, clientY) > 10) && this.eventStatus === eventStatus.start) this.eventStatus = eventStatus.doing // 드레그가 시작됐다고 판단하는 움직임 +- 10
    }
  }

  render() {
    return html`
      <div class="hb-carousel__wrap" 
        style="transform: translateX(${this.itemPosition});--duration: ${this.transitionDuration}ms;--type: ${this.rolling ? 'linear': 'ease'};">
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