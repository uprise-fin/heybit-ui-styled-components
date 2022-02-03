//button.spec.ts
import { LitElement } from "lit";
describe("hb-select", () => {
  const AWESOME_BUTTON_TAG = "hb-select";
  // const ELEMENT_ID = "label";
  let buttonElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    // return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(async () => {
    buttonElement = window.document.createElement(
      AWESOME_BUTTON_TAG
    ) as LitElement;
    await document.body.appendChild(buttonElement);
    // await setTimeout(() => {}, 2000);
  });

  afterEach(() => {
    document.body.getElementsByTagName(AWESOME_BUTTON_TAG)[0].remove();
  });

  // it("displays button text", async () => {
  //   const dummyText = "test";
  //   buttonElement.setAttribute("buttonText", dummyText);
  //   await buttonElement.updateComplete;

  //   const renderedText =
  //     getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID).innerText;

  //   expect(renderedText).toEqual(dummyText);
  // });
  it("handles clicks", async () => {
    // const mockClickFunction = jest.fn();
    // buttonElement.addEventListener("click", () => {
    //   mockClickFunction();
    // });
    // const el = getShadowRoot(AWESOME_BUTTON_TAG);
    // const label = getShadowRoot(AWESOME_BUTTON_TAG).getElementById(ELEMENT_ID);
    // const list = getShadowRoot(AWESOME_BUTTON_TAG).getElementById("list");
    // console.log(
    //   document.body
    //     .getElementsByTagName(AWESOME_BUTTON_TAG)[0]
    //     .classList.add("open")
    // );

    await document.body.getElementsByTagName(AWESOME_BUTTON_TAG)[0].focus();
    // // console.log(getComputedStyle(label));
    console.log(
      getComputedStyle(getShadowRoot(AWESOME_BUTTON_TAG).getElementById("list"))
        .display
    );
    buttonElement.setAttribute("value", "1");
    buttonElement.innerHTML = `
      <div
        class="dwad"
        slot="option"
        tabindex="0"
        data-value="1"
        data-label="2"
      >
        ㅂ브ㄹ라블라
      </div>
      <div
        class="dddddd"
        slot="option"
        tabindex="0"
        data-value="aaa"
        data-label="bbb"
      >
        3242423
      </div>
      <div
        class="dddddd"
        slot="option"
        tabindex="0"
        data-value="444"
        data-label="666"
      >
        dawdawd
      </div>`;
    // console.log(
    //   document.body
    //     .getElementsByTagName("hb-select")[0]
    //     .querySelectorAll("*")[0]
    // );
    console.log(document.getElementsByTagName("div")[0].focus());
    // document.body.querySelector(".dwad").click();
    await setTimeout(() => {}, 2000);
    console.log(
      getComputedStyle(getShadowRoot(AWESOME_BUTTON_TAG).getElementById("list"))
        .display
    );
    // console.log(getComputedStyle(list));
    // expect(mockClickFunction).toHaveBeenCalledTimes(2);
  });
});
