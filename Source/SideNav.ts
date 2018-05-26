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

@CustomElement("empati-sidenav")
export default class SideNav extends EmpatiElement {
  @Property BackdropMaxOpacity = 0.6;
  @Property Size = window.innerWidth * 0.7;

  @Property
  @Check((E, New: number) => New >= 0 && New <= E.Size)
  Position = 0;

  State = SideNavStates.Closed;

  @Event("click", "Activator")
  Open() {
    this.State = SideNavStates.Open;
    this.Position = this.Size;
  }

  @Event("click", "BackDrop")
  Close() {
    this.State = SideNavStates.Closed;
    this.Position = 0;
  }

  @Event("touchstart", "Nav", true)
  TouchStart(Event: TouchEvent) {
    this.State = SideNavStates.Swipe;
    this.$.Nav.classList.add("Touch");
    this.LastSwipeLoc = Event.changedTouches[0].clientX;
  }

  @Event("touchmove", "Nav", true)
  Swipe(Event: TouchEvent) {
    const Diff = this.LastSwipeLoc - Event.changedTouches[0].clientX;
    this.LastSwipeLoc -= Diff;
    this.Position -= Diff;
  }

  @Event("touchend", "Nav", true)
  TouchEnd() {
    this.$.Nav.classList.remove("Touch");
    if (this.Position < this.Size / 2) this.Close();
    else this.Open();
  }

  Render({ Position, Size, BackdropMaxOpacity }: Properties<this>) {
    return html`
    <style>
      :host{
        display: flex;
        align-items: center;
        flex-grow: 1;
      }

      #Nav {
        position: fixed;
        height: 100%;
        top: 0;
        left: -${Size}px;
        width: ${Size}px;
        transform: translateX(${Position}px);
        will-change: transform left;
        touch-action: pan-x;
        transition: .15s;
        
        background:red;
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
        will-change: opacity display;
        transition: .15s;
      }

      .Touch {
        transition: none !important;
      }

      #Activator {
        margin-right: 10px;
      }
    </style>
    <div id="BackDrop"></div>
    <div id="Nav"></div>
    <material-icon id="Activator" icon="menu"></material-icon>
    <slot name="Logo"></slot>
    
    `;
  }
}
