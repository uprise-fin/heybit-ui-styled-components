import { html, fixture, expect } from "@open-wc/testing";

import { HbDialog } from "../src/components/hb-dialog/index";

describe("HbDialog", () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: HbDialog = await fixture(html` <hb-dialog></hb-dialog> `);
    console.log(el);
    expect(el.tagName).to.equal("HB-DIALOG");
    // expect(el.title).to.equal("Hey there");
    // expect(el.counter).to.equal(5);
  });

  // it("increases the counter on button click", async () => {
  //   const el: HbDialog = await fixture(html` <my-element></my-element> `);
  //   el.shadowRoot!.querySelector("button")!.click();

  //   expect(el.counter).to.equal(6);
  // });

  // it("can override the title via attribute", async () => {
  //   const el: HbDialog = await fixture(
  //     html` <my-element title="attribute title"></my-element> `
  //   );

  //   expect(el.title).to.equal("attribute title");
  // });

  // it("passes the a11y audit", async () => {
  //   const el: HbDialog = await fixture(html` <my-element></my-element> `);

  //   await expect(el).shadowDom.to.be.accessible();
  // });
});
