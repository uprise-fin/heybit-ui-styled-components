/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {MyElement} from '../../src/my-element.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('my-element', () => {
  test('styling applied', async () => {
    const el = (await fixture(html`<my-element></my-element>`)) as MyElement;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
