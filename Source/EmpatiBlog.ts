import "reflect-metadata";

import Header from "./Header";
import EmpatiElement, { CustomElement, html } from "./EmpatiElement";

@CustomElement("empati-blog")
export default class EmpatiBlog extends EmpatiElement {
  static get Dependacies() {
    return [Header];
  }

  Render() {
    return html`<empati-header></empati-header>`;
  }
}
