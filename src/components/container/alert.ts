import { html } from 'lit';
import './alert.scss';

/**
 * Primary UI component for user interaction
 */
export const Alert = ({ color, outline }: any) => {
  const classed = ['alert'];
  if (color) {
    classed.push('alert--' + color);
  }
  if (outline && outline == 'true') {
    classed.push('alert--outline');
  }

  return html` <div class=${classed.join(' ')}>A simple primary alert—check it out!</div> `;
};
