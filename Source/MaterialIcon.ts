import EmpatiElement, {
  CustomElement,
  html,
  Property,
  Properties
} from "./EmpatiElement";

@CustomElement("material-icon")
export default class MaterialIcon extends EmpatiElement {
  @Property Icon: string;

  Render({ Icon }: Properties<this>) {
    return html`
      <style>
        :host{
          font-family: 'Material Icons';
          font-weight: normal;
          font-style: normal;
          font-size: var(--icon-size, 24px);
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }
      </style>
      ${Icon}
    `;
  }
}
