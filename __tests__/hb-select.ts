//button.spec.ts
import { LitElement } from "lit";
import { getShadowRoot, getElement } from "./utils";
describe("hb-select", () => {
  const AWESOME_BUTTON_TAG = "hb-select";
  // const ELEMENT_ID = "label";
  let buttonElement: LitElement;

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

    await getElement(AWESOME_BUTTON_TAG)?.focus();
    // // console.log(getComputedStyle(label));
    if (getShadowRoot(AWESOME_BUTTON_TAG)?.getElementById("list")) {
      const a = getShadowRoot(AWESOME_BUTTON_TAG)?.getElementById("list");
      console.log(a);
    }
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
    await document.body.focus();
    await setTimeout(() => {}, 1000);
    // document.body.querySelector(".dwad").click();
    console.log(
      getComputedStyle(
        getShadowRoot(AWESOME_BUTTON_TAG)!.getElementById("list")!
      ).display
    );
    // console.log(getComputedStyle(list));
    // expect(mockClickFunction).toHaveBeenCalledTimes(2);
  });
});
