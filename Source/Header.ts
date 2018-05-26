import MaterialIcon from "./MaterialIcon";
import SideNav from "./SideNav";
import { Color } from "./Style";
import EmpatiElement, { CustomElement, html } from "./EmpatiElement";

@CustomElement("empati-header")
export default class Header extends EmpatiElement {
  static get Dependacies() {
    return [MaterialIcon, SideNav];
  }

  Render() {
    return html`
      <style>
        :host {
          background-color: ${Color.Primary};
          color: var(--primary-text-color);
          height: 60px;
          box-sizing: border-box; 
          padding: 10px;
          position: sticky;
          top: 0;
          display: flex;

          font-size: 24px;
          align-items: center;

          --icon-size: 40px;
        }

        #Account {
          margin-left: auto;
        }

        #Logo {    
          flex-grow: 1;
          text-align: center;
        }
      </style>
      <empati-sidenav>
        <span id="Logo" slot="Logo">EmpatiLab</span>
      </empati-sidenav>
      <material-icon id="Account" icon="account_box"></material-icon>
    `;
  }
}
