//button.spec.ts
import { HbSelect } from "../../src";
import { getRandom, getShadowElement, getShadowRoot } from "../utils";
const SHADOW_TAG = "hb-select";
describe(SHADOW_TAG, () => {
  let SHADOW_ELEMENT: HbSelect;
  let SHADOW_ROOT: ShadowRoot | null;
  const options = [
    { label: "aa", value: "aa" },
    { label: "가나다", value: "가나다" },
    { label: "호놀룰루", value: "루룰놀호" },
  ];
  const value = options[getRandom(options)].value;
  beforeEach(() => {
    SHADOW_ELEMENT = window.document.createElement(SHADOW_TAG) as HbSelect;
    SHADOW_ELEMENT.setAttribute("value", value);
    SHADOW_ELEMENT.setAttribute("options", JSON.stringify(options));
    document.body.appendChild(SHADOW_ELEMENT);
    SHADOW_ROOT = getShadowRoot(SHADOW_TAG);
  });

  afterEach(() => {
    getShadowElement(SHADOW_TAG)?.remove();
  });

  it(`${SHADOW_TAG}에 value와 option slot이 입력되면 value에 맞는 라벨이 적용된다.`, async () => {
    const input = SHADOW_ROOT.getElementById("label") as HTMLInputElement;
    expect(input.value).toEqual(options.find((x) => x.value === value)?.label);
  });
  it(`${SHADOW_TAG}에 option slot이 선택되면 value와 label이 바뀐다.`, async () => {
    const value = options[getRandom(options)].value;
    SHADOW_ELEMENT.setAttribute("value", value);
    const input = SHADOW_ROOT?.getElementById("label") as HTMLInputElement;
    await SHADOW_ELEMENT.updateComplete;
    expect(input.value).toEqual(options.find((x) => x.value === value).label);
  });
});
