import {HbButton} from '@/module';
import {getShadowElement} from '../utils';
const SHADOW_TAG = 'hb-button';

describe(SHADOW_TAG, () => {
  let flag = false;
  let SHADOW_ELEMENT: HbButton;
  const customEvent = () => (flag = true);

  beforeEach(async () => {
    flag = false;
    SHADOW_ELEMENT = window.document.createElement(SHADOW_TAG) as HbButton;
    SHADOW_ELEMENT.addEventListener('event', customEvent);
    document.body.appendChild(SHADOW_ELEMENT);
    // SHADOW_ROOT = getShadowRoot(SHADOW_TAG);
  });

  afterEach(() => {
    getShadowElement(SHADOW_TAG)?.remove();
  });

  it(`${SHADOW_TAG}는 click 시 event이벤트를 호출해야 한다.`, async () => {
    await SHADOW_ELEMENT.click();
    expect(flag).toEqual(true);
  });
  it(`${SHADOW_TAG}는 disabled시 click이벤트는 event를 호출하지 않는다.`, async () => {
    SHADOW_ELEMENT.setAttribute('disabled', '');
    await SHADOW_ELEMENT.click();
    expect(flag).toEqual(false);
  });
  it(`${SHADOW_TAG}는 loading시 click이벤트는 event를 호출하지 않는다.`, async () => {
    SHADOW_ELEMENT.setAttribute('loading', '');
    await SHADOW_ELEMENT.click();
    expect(flag).toEqual(false);
  });
  it(`${SHADOW_TAG}는 baseLoadingDuration옵션이 있을때 그 시간동안 click이벤트는 발생하지 않는다.`, async () => {
    SHADOW_ELEMENT.setAttribute('baseLoadingDuration', '1000');
    await SHADOW_ELEMENT.click();
    await SHADOW_ELEMENT.click();
    expect(flag).toEqual(true);
  });
  // it(`${SHADOW_TAG}에 'open' 프로퍼티가 있으면 화면에 보여야 한다.`, async () => {
  //   SHADOW_ELEMENT.setAttribute('open', '');
  //   expect(getComputedStyle(SHADOW_ELEMENT).display).not.toEqual('none');
  // });
});
