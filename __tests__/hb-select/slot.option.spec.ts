//button.spec.ts
import { HbSelect } from "../../src";
import { getShadowElement, getRandom } from "../utils";
const SHADOW_TAG = "hb-select";
describe(SHADOW_TAG, () => {
  let SHADOW_ELEMENT: HbSelect;
  const options = [
    { label: "aa", value: "aa" },
    { label: "가나다", value: "가나다" },
    { label: "호놀룰루", value: "루룰놀호" },
  ];
  const value = options[getRandom(options)].value;
  beforeEach(() => {
    SHADOW_ELEMENT = window.document.createElement(SHADOW_TAG) as HbSelect;
    SHADOW_ELEMENT.setAttribute("value", value);
    options.map(({ label, value }) => {
      const div = document.createElement("div");
      div.slot = "option";
      div.tabIndex = 0;
      div.dataset.value = value;
      div.dataset.label = label;
      SHADOW_ELEMENT.appendChild(div);
    });
    document.body.appendChild(SHADOW_ELEMENT);
  });

  afterEach(() => {
    getShadowElement(SHADOW_TAG)?.remove();
  });

  afterAll((done) => {
    done();
  });

  it(`${SHADOW_TAG}에 value와 option slot이 입력되면 value에 맞는 라벨이 적용된다.`, async () => {
    expect(SHADOW_ELEMENT.label).toEqual(
      options.find((x) => x.value === value)?.label
    );
  });
  it(`${SHADOW_TAG}에 option slot이 선택되면 value와 label이 바뀐다.`, async () => {
    const selectedElement = SHADOW_ELEMENT.optionEls[getRandom(options)];
    selectedElement.click();
    expect(SHADOW_ELEMENT.getAttribute("value")).toEqual(
      selectedElement.dataset.value
    );
    expect(SHADOW_ELEMENT.labelEl.dataset.label).toEqual(
      selectedElement.dataset.label
    );
    expect(SHADOW_ELEMENT.value).toEqual(selectedElement.dataset.value);
    expect(SHADOW_ELEMENT.label).toEqual(selectedElement.dataset.label);
  });
});
