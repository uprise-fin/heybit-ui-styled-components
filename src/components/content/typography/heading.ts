import { html } from 'lit';
import './heading.scss';

/**
 * Primary UI component for user interaction
 */
export const Heading = ({}) => {
  return html`
    <h1 class="h1">h1. Heybit heading</h1>
    <h2 class="h2">h2. Heybit heading</h2>
    <h3 class="h3">h3. Heybit heading</h3>
    <h4 class="h4">h4. Heybit heading</h4>
    <h5 class="h5">h5. Heybit heading</h5>
    <h6 class="h6">h6. Heybit heading</h6>
    <br /><br /><br />

    <h1 class="h1">h1. Heybit heading <small>sub heading text</small></h1>
    <h2 class="h2">h2. Heybit heading <small>sub heading text</small></h2>
    <h3 class="h3">h3. Heybit heading <small>sub heading text</small></h3>
    <h4 class="h4">h4. Heybit heading <small>sub heading text</small></h4>
    <h5 class="h5">h5. Heybit heading <small>sub heading text</small></h5>
    <h6 class="h6">h6. Heybit heading <small>sub heading text</small></h6>
  `;
};
