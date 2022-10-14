import { HbInput } from '@/module';
import { getShadowElement } from '../utils';
const SHADOW_TAG = 'hb-input';

describe(SHADOW_TAG, () => {
  let SHADOW_ELEMENT: HbInput;

  beforeEach(async () => {
    SHADOW_ELEMENT = window.document.createElement(SHADOW_TAG) as HbInput;
    document.body.appendChild(SHADOW_ELEMENT);
    // SHADOW_ROOT = getShadowRoot(SHADOW_TAG);
  });

  afterEach(() => {
    getShadowElement(SHADOW_TAG)?.remove();
  });

  it(`${SHADOW_TAG}는 type="number"일때 숫자만 받아야 한다.`, async () => {
    SHADOW_ELEMENT.setAttribute('type', 'number');
    SHADOW_ELEMENT.setAttribute('value', 'djawkldajw123123');
    expect(SHADOW_ELEMENT.value).toEqual('123,123');
    expect(SHADOW_ELEMENT.originalValue).toEqual('123123');
  });

  it(`${SHADOW_TAG}는 maxlength를 지정하면 그 이상의 값은 가질 수 없다.`, async () => {
    SHADOW_ELEMENT.setAttribute('maxlength', '8');
    SHADOW_ELEMENT.setAttribute('value', '12345678910');
    expect(SHADOW_ELEMENT.value).toEqual('12345678');
  });

  // it(`${SHADOW_TAG}는 click 시 event이벤트를 호출해야 한다.`, async () => {
  //   await SHADOW_ELEMENT.click();
  //   expect(flag).toEqual(true);
  // });
  // it(`${SHADOW_TAG}는 disabled시 click이벤트는 event를 호출하지 않는다.`, async () => {
  //   SHADOW_ELEMENT.setAttribute('disabled', '');
  //   await SHADOW_ELEMENT.click();
  //   expect(flag).toEqual(false);
  // });
  // it(`${SHADOW_TAG}는 loading시 click이벤트는 event를 호출하지 않는다.`, async () => {
  //   SHADOW_ELEMENT.setAttribute('loading', '');
  //   await SHADOW_ELEMENT.click();
  //   expect(flag).toEqual(false);
  // });
  // it(`${SHADOW_TAG}는 baseLoadingDuration옵션이 있을때 그 시간동안 click이벤트는 발생하지 않는다.`, async () => {
  //   SHADOW_ELEMENT.setAttribute('baseLoadingDuration', '1000');
  //   await SHADOW_ELEMENT.click();
  //   await SHADOW_ELEMENT.click();
  //   expect(flag).toEqual(true);
  // });
  // it(`${SHADOW_TAG}에 'open' 프로퍼티가 있으면 화면에 보여야 한다.`, async () => {
  //   SHADOW_ELEMENT.setAttribute('open', '');
  //   expect(getComputedStyle(SHADOW_ELEMENT).display).not.toEqual('none');
  // });
});
