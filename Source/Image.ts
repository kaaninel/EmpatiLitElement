import EmpatiElement, {
  html,
  CustomElement,
  Property,
  Properties,
  Event
} from "./EmpatiElement";

@CustomElement("empati-image")
export default class Image extends EmpatiElement {
  @Property Source: string;

  @Property Text: string;

  @Event("click")
  ChangeImage() {
    this.Source = `https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-${Math.round(
      Math.random() * 600000
    )}.jpg`;
  }

  Render({ Text, Source }: Properties<this>) {
    return html`
    <style>
      :host{
        display: block;
      }

      div{
        background-image: url(${Source});
        background-size: cover;
        width: 100%;
        padding-bottom: 56.25%;
        position: relative;
      }
      
      span {
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,.8);
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        color: white;
        font-size: 16px;
      }
    </style>
    <div>
      <span>
        ${Text}
      </span>
    </div>
    `;
  }
}
