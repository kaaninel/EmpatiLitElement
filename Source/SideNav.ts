import EmpatiElement, {
  html,
  Property,
  CustomElement,
  Properties,
  Event,
  Check
} from "./EmpatiElement";

enum SideNavStates {
  Open,
  Closed,
  Swipe
}

export enum SideNavPosition {
  Left = "left",
  Right = "right"
}

@CustomElement("empati-sidenav")
export default class SideNav extends EmpatiElement {
  @Property BackdropMaxOpacity = 0.6;
  @Property Size = window.innerWidth * 0.7;
  @Property Side = SideNavPosition.Left;
  @Property Icon = "menu";

  @Property
  @Check((E, New: number) => New >= 0 && New <= E.Size)
  Position = 0;

  @Property State = SideNavStates.Closed;

  @Event("click", "Activator")
  Open() {
    this.State = SideNavStates.Open;
    this.$.Nav.classList.add("Active");
    this.$.BackDrop.classList.add("Active");
    this.Position = this.Size;
  }

  @Event("click", "BackDrop")
  Close() {
    this.State = SideNavStates.Closed;
    this.$.Nav.classList.remove("Active");
    this.$.BackDrop.classList.remove("Active");
    this.Position = 0;
  }

  @Event("touchstart", "Nav", true)
  TouchStart(Event: TouchEvent) {
    this.State = SideNavStates.Swipe;
    this.$.Nav.classList.add("Touch");
    this.LastSwipeLoc = Event.changedTouches[0].clientX;
  }

  @Event("touchmove", "Nav", true)
  TouchMove(Event: TouchEvent) {
    const Diff = this.LastSwipeLoc - Event.changedTouches[0].clientX;
    this.LastSwipeLoc -= Diff;
    this.Position += this.Side == SideNavPosition.Left ? -Diff : Diff;
  }

  @Event("touchend", "Nav", true)
  TouchEnd() {
    this.$.Nav.classList.remove("Touch");
    if (this.Position < this.Size / 2) this.Close();
    else this.Open();
  }

  Render({
    Position,
    Size,
    BackdropMaxOpacity,
    Side,
    Icon,
    State
  }: Properties<this>) {
    return html`
    <style>
      :host{
        display: flex;
        align-items: center;
      }

      #Nav {
        position: fixed;
        height: 100%;
        top: 0;
        ${Side}: -${Size}px;
        width: ${Size + 15}px;
        transform: translateX(${
          this.Side == SideNavPosition.Left ? Position : -Position
        }px);
        will-change: transform;
        touch-action: pan-x;
        transition: .15s;
        
      }

      #BackDrop {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-color: black;
        opacity: ${Position / Size * BackdropMaxOpacity};
        display: ${Position ? "block" : "none"};
        will-change: opacity, display;
        transition: .15s;
      }

      #Content {
        width: calc(100% - 15px);
        background: white;
        height: 100%;
        position: absolute;
        top: 0;
        ${Side}: 0;
      }

      .Touch {
        transition: none !important;
      }

      .Active {
        z-index: 10;
      }
    </style>
    <div id="BackDrop"></div>
    <div id="Nav">
      <div id="Content">
        <slot name="NavBar"></slot>
      </div>
    </div>
    <material-icon id="Activator" Icon$="${Icon}"></material-icon>
    <slot name="Logo"></slot>
    
    `;
  }
}
