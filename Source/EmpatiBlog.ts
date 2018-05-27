import "reflect-metadata";

import Header from "./Header";
import EmpatiElement, { CustomElement, html } from "./EmpatiElement";
import { Shadow } from "./Style";
import Image from "./Image";

@CustomElement("empati-blog")
export default class EmpatiBlog extends EmpatiElement {
  static get Dependacies() {
    return [Header, Image];
  }

  Render() {
    return html`
    <style>
      :host{
        display: block;
      }
      #Container {
        padding: 15px;
      }
      #Container > * {
        box-shadow: ${Shadow.Dp1};
        margin-bottom: 15px;
      }
    </style>
    <empati-header></empati-header>
    <main id="Container">
      <empati-image></empati-image>
      <empati-image></empati-image>
      <empati-image></empati-image>
      <empati-image></empati-image>
      <empati-image></empati-image>
    </main>
    `;
  }
}
