import "reflect-metadata";

import Header from "./Header";
import EmpatiElement, {
  CustomElement,
  html,
  Property,
  Properties
} from "./EmpatiElement";
import { Shadow } from "./Style";
import Image from "./Image";

@CustomElement("empati-blog")
export default class EmpatiBlog extends EmpatiElement {
  static get Dependacies() {
    return [Header, Image];
  }

  @Property Images: Array<{ Image: string; Text: string }> = [];

  constructor() {
    super();
    fetch("/Static/Posts.json")
      .then(x => x.json())
      .then(x => {
        this.Images = x;
      });
  }

  Render({ Images }: Properties<this>) {
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
      ${Images.map(
        x =>
          html`<empati-image Source=${x.Image} Text=${x.Text}></empati-image>`
      )}
    </main>
    `;
  }
}
