//button.spec.ts
import { LitElement } from "lit";
describe("hb-dialog", () => {
  const AWESOME_BUTTON_TAG = "hb-dialog";
  const ELEMENT_ID = "close-btn";
  let buttonElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    buttonElement = window.document.createElement(
      AWESOME_BUTTON_TAG
    ) as LitElement;
    document.body.appendChild(buttonElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(AWESOME_BUTTON_TAG)[0].remove();
  });

  it("displays button text", async () => {
    const dummyText = "test";
    buttonElement.setAttribute("buttonText", dummyText);
    await buttonElement.updateComplete;

    const renderedText =
      getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).innerText;

    expect(renderedText).toEqual(dummyText);
  });
  // it("handles clicks", async () => {
  //   const mockClickFunction = jest.fn();
  //   buttonElement.addEventListener("click", () => {
  //     mockClickFunction();
  //   });

  //   getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();
  //   getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).click();

  //   expect(mockClickFunction).toHaveBeenCalledTimes(2);
  // });
});
