import { html, fixture, expect, oneEvent } from "@open-wc/testing";

import { HbDialog } from "../src/components/hb-dialog/index";

describe("HbDialog", () => {
  it("hb-dialog 태그명 체크", async () => {
    const el: HbDialog = await fixture(html`<hb-dialog></hb-dialog>`);
    expect(el.tagName).to.equal("HB-DIALOG");
  });
});
