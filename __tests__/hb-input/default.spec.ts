import { HbInput } from "../../src";
import { getShadowElement } from "../utils";
const SHADOW_TAG = "hb-input";
describe(SHADOW_TAG, () => {
  let SHADOW_ELEMENT: HbInput;

  beforeEach(() => {
    SHADOW_ELEMENT = window.document.createElement(SHADOW_TAG) as HbInput;
    document.body.appendChild(SHADOW_ELEMENT);
  });

  afterEach(() => {
    getShadowElement(SHADOW_TAG)?.remove();
  });

  it(`${SHADOW_TAG}의 value속성은 초기 value값을 설정한다`, (done) => {
    const value = "blahblah";
    SHADOW_ELEMENT.setAttribute("value", value);
    try {
      SHADOW_ELEMENT.updateComplete;
      expect(SHADOW_ELEMENT.value).toEqual(value);
      done();
    } catch (error) {
      done(error);
    }
    // const list = SHADOW_ROOT?.getElementById("list");
    // expect(getComputedStyle(list!).display).toEqual("none");
  });
  // it(`${SHADOW_TAG}에 포커싱되면 'open'클래스가 추가된다.`, async () => {
  //   SHADOW_ELEMENT.focus();
  //   expect(SHADOW_ELEMENT.className).toContain("open");
  // });
  // it(`${SHADOW_TAG}에 'open'클래스가 있으면 리스트는 화면에 보여야 한다.`, async () => {
  //   SHADOW_ELEMENT.focus();
  //   const list = SHADOW_ROOT?.getElementById("list");
  //   expect(getComputedStyle(list!).display).not.toEqual("none");
  // });
  // it(`${SHADOW_TAG}에 리스트의 너비는 부모엘리먼트의 너비와 동일해야 한다.`, async () => {
  //   SHADOW_ELEMENT.focus();
  //   const list = SHADOW_ROOT?.getElementById("list");
  //   await SHADOW_ELEMENT.updateComplete;
  //   expect(getComputedStyle(list!).width).toEqual(
  //     getComputedStyle(SHADOW_ELEMENT).width
  //   );
  // });
  // it(`${SHADOW_TAG}에 블러되면 'open'클래스가 제거된다.`, async () => {
  //   SHADOW_ELEMENT.classList.add("open");
  //   SHADOW_ELEMENT.onHide();
  //   await SHADOW_ELEMENT.updateComplete;
  //   expect(SHADOW_ELEMENT.className).not.toContain("open");
  // }, 0);
});
