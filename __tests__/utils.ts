export function getShadowElement(tagName: string): HTMLElement | null {
  // return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  return document.body.getElementsByTagName(tagName)
    ? (document.body.getElementsByTagName(tagName)[0] as HTMLElement)
    : null;
}
export function getShadowRoot(tagName: string): ShadowRoot | null {
  // return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  return getShadowElement(tagName) ? getShadowElement(tagName)!.shadowRoot : null;
}
export function getRandom(options: Array<any>) {
  return Math.ceil(Math.random() * options.length - 1);
}
// TODO 테스트코드 작성, 팝업 토스트
