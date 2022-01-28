/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {HbSelect} from '../components/hb-select';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('hb-select', () => {
  test('styling applied', async () => {
    const el = (await fixture(html`<hb-select></hb-select>`)) as HbSelect;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).visibility, 'visible');
  });
  test('renders with default values', async () => {
    const el = (await fixture(
      html`<hb-select class="open"></hb-select>`
    )) as HbSelect;
    console.log(el.shadowRoot);
    await el.updateComplete;
    // console.log(el.shadowRoot);
    // const button = el.shadowRoot?.querySelector('div')!;
    // button.click();
  });

  // test('renders with a set name', async () => {
  //   const el = await fixture(html`<hb-select name="Test"></hb-select>`);
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, Test!</h1>
  //     <button part="button">Click Count: 0</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('handles a click', async () => {
  //   const el = (await fixture(html`<hb-select></hb-select>`)) as MyElement;
  //   const button = el.shadowRoot!.querySelector('button')!;
  //   button.click();
  //   await el.updateComplete;
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, World!</h1>
  //     <button part="button">Click Count: 1</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('styling applied', async () => {
  //   const el = (await fixture(html`<hb-select></hb-select>`)) as MyElement;
  //   await el.updateComplete;
  //   assert.equal(getComputedStyle(el).paddingTop, '16px');
  // });
});
