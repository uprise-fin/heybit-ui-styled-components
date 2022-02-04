//button.spec.ts
import { HbSelect } from "../../src";
import { getShadowElement, getShadowRoot } from "../utils";
const SHADOW_TAG = "hb-select";
describe(SHADOW_TAG, () => {
  let SHADOW_ELEMENT: HbSelect;
  let SHADOW_ROOT: ShadowRoot | null;

  beforeEach(() => {
    SHADOW_ELEMENT = window.document.createElement(SHADOW_TAG) as HbSelect;
    document.body.appendChild(SHADOW_ELEMENT);
    SHADOW_ROOT = getShadowRoot(SHADOW_TAG);
  });

  afterEach(() => {
    getShadowElement(SHADOW_TAG)?.remove();
  });

  it(`${SHADOW_TAG}의 리스트는 화면에 보이지 않아야 한다.`, (done) => {
    const list = SHADOW_ROOT?.getElementById("list");
    try {
      expect(getComputedStyle(list!).display).toEqual("none");
      done();
    } catch (error) {
      done(error);
    }
  });
  it(`${SHADOW_TAG}에 포커싱되면 'open'클래스가 추가된다.`, (done) => {
    SHADOW_ELEMENT.focus();
    try {
      expect(SHADOW_ELEMENT.className).toContain("open");
      done();
    } catch (error) {
      done(error);
    }
  });
  it(`${SHADOW_TAG}에 'open'클래스가 있으면 리스트는 화면에 보여야 한다.`, (done) => {
    SHADOW_ELEMENT.focus();
    const list = SHADOW_ROOT?.getElementById("list");
    try {
      expect(getComputedStyle(list!).display).not.toEqual("none");
      done();
    } catch (error) {
      done(error);
    }
  });
  it(`${SHADOW_TAG}에 리스트의 너비는 부모엘리먼트의 너비와 동일해야 한다.`, async () => {
    SHADOW_ELEMENT.focus();
    const list = SHADOW_ROOT?.getElementById("list");
    await SHADOW_ELEMENT.updateComplete;
    expect(getComputedStyle(list!).width).toEqual(
      getComputedStyle(SHADOW_ELEMENT).width
    );
  });
  it(`${SHADOW_TAG}에 블러되면 'open'클래스가 제거된다.`, (done) => {
    SHADOW_ELEMENT.classList.add("open");
    SHADOW_ELEMENT.onHide();
    try {
      expect(SHADOW_ELEMENT.className).not.toContain("open");
      done();
    } catch (error) {
      done(error);
    }
  }, 0);
});
