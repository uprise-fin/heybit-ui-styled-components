export function getElement(tagName: string): HTMLElement | null {
  // return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  return document.body.getElementsByTagName(tagName)
    ? (document.body.getElementsByTagName(tagName)[0] as HTMLElement)
    : null;
}
export function getShadowRoot(tagName: string): ShadowRoot | null {
  // return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  return getElement(tagName) ? getElement(tagName)!.shadowRoot : null;
}
