//button.spec.ts
import { HbSelect } from "../../src";
import { getShadowElement, getShadowRoot } from "../utils";
const SHADOW_TAG = "hb-select";
describe(SHADOW_TAG, () => {
  let SHADOW_ELEMENT: HbSelect;
  let SHADOW_ROOT: ShadowRoot | null;

  beforeEach(async () => {
    SHADOW_ELEMENT = window.document.createElement(SHADOW_TAG) as HbSelect;
    document.body.appendChild(SHADOW_ELEMENT);
    SHADOW_ROOT = getShadowRoot(SHADOW_TAG);
  });

  afterEach(() => {
    getShadowElement(SHADOW_TAG)?.remove();
  });

  it(`${SHADOW_TAG}의 리스트는 화면에 보이지 않아야 한다.`, async () => {
    const list = SHADOW_ROOT?.getElementById("select-transition");
    expect(getComputedStyle(list!).display).toEqual("none");
  });
  it(`${SHADOW_TAG}에 'open'클래스가 있으면 리스트는 화면에 보여야 한다.`, async () => {
    (SHADOW_ROOT?.getElementById("label") as HTMLInputElement).focus();
    const list = SHADOW_ROOT?.getElementById("list");
    expect(getComputedStyle(list!).display).not.toEqual("none");
  });
});
