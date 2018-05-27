import EmpatiElement, { html } from "./EmpatiElement";

export default class Container extends EmpatiElement {
  Render() {
    return html`
    <style>
      :host{
        width: 95%;
        display: block;
      }
    </style>
    <slot></slot>
    `;
  }
}
