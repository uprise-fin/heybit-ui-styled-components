import {HbModal} from '../../src/module';
import {getShadowElement, getShadowRoot} from '../utils';
const SHADOW_TAG = 'hb-modal';
describe(SHADOW_TAG, () => {
  let SHADOW_ELEMENT: HbModal;
  let SHADOW_ROOT: ShadowRoot | null;

  beforeEach(async () => {
    SHADOW_ELEMENT = window.document.createElement(SHADOW_TAG) as HbModal;
    document.body.appendChild(SHADOW_ELEMENT);
    SHADOW_ROOT = getShadowRoot(SHADOW_TAG);
  });

  afterEach(() => {
    getShadowElement(SHADOW_TAG)?.remove();
  });

  it(`${SHADOW_TAG}는 화면에 보이지 않아야 한다.`, async () => {
    const list = SHADOW_ROOT?.getElementById('modal-transition') as HTMLElement;
    expect(getComputedStyle(list!).display).toEqual('none');
  });
  it(`${SHADOW_TAG}에 'open' 프로퍼티가 있으면 화면에 보여야 한다.`, async () => {
    SHADOW_ELEMENT.setAttribute('open', '');
    expect(getComputedStyle(SHADOW_ELEMENT).display).not.toEqual('none');
  });
});
