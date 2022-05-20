//button.spec.ts
import { HbDialog } from "../../src";
import { getShadowElement, getShadowRoot } from "../utils";
const SHADOW_TAG = "hb-dialog";
describe(SHADOW_TAG, () => {
  let SHADOW_ELEMENT: HbDialog;
  let SHADOW_ROOT: ShadowRoot | null;

  beforeEach(() => {
    SHADOW_ELEMENT = window.document.createElement(SHADOW_TAG) as HbDialog;
    document.body.appendChild(SHADOW_ELEMENT);
    SHADOW_ROOT = getShadowRoot(SHADOW_TAG);
  });

  afterEach(() => {
    getShadowElement(SHADOW_TAG)?.remove();
  });

  it(`${SHADOW_TAG}는 화면에 보이지 않아야 한다.`, async () => {
    const list = SHADOW_ROOT?.getElementById("transition");
    expect(getComputedStyle(list).display).toEqual("none");
  });
  it(`${SHADOW_TAG}에 'open' 프로퍼티가 있으면 화면에 보여야 한다.`, async () => {
    SHADOW_ELEMENT.setAttribute("open", "");
    expect(getComputedStyle(SHADOW_ELEMENT).display).not.toEqual("none");
  });
  it(`${SHADOW_TAG}에 'close-btn' 클릭하면 'open'클래스는 사라진다.`, async () => {
    SHADOW_ELEMENT.setAttribute("open", "");
    const closeBtn = SHADOW_ROOT?.getElementById("close-btn");
    closeBtn?.click();
    expect(SHADOW_ELEMENT.className).not.toContain("open");
  }, 2000);
});
