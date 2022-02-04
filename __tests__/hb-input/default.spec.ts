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
  afterAll((done) => {
    done();
  });

  it(`${SHADOW_TAG}의 value속성은 초기 value값을 설정한다`, async () => {
    const value = "blahblah";
    SHADOW_ELEMENT.setAttribute("value", value);
    await SHADOW_ELEMENT.updateComplete;
    expect(SHADOW_ELEMENT.value).toEqual(value);
  });
});
