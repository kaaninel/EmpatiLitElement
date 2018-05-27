import MaterialIcon, { Icons } from "./MaterialIcon";
import SideNav, { SideNavPosition } from "./SideNav";
import { Color, Shadow } from "./Style";
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
          color: ${Color.PrimaryText};
          height: 60px;
          box-sizing: border-box; 
          padding: 10px;
          position: sticky;
          top: 0;
          display: flex;
          z-index: 10;

          font-size: 40px;
          align-items: center;
          box-shadow: ${Shadow.Dp3};

        }

        #Logo {    
          font-size: 24px;
          flex-grow: 1;
          text-align: center;
          padding:10px;
        }

        #Nav {
          flex-grow: 1;
        }
      </style>
      <empati-sidenav id="Nav">
        <span id="Logo" slot="Logo">EmpatiLab</span>
        <h1 slot="NavBar">Test</h1>
      </empati-sidenav>
      <empati-sidenav Side=${SideNavPosition.Right} Icon=${Icons.AccountBox}>
      </empati-sidenav>
    `;
  }
}
