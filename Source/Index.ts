import EmpatiElement, { CustomElement, html, Event, Dispatch } from "EmpatiUI/EmpatiElement";

@CustomElement("empati-index")
export default class EmpatiIndex extends EmpatiElement {

  ScrollTimeLock = 0;
  ScrollRAFLock = false;
  Trials = 0;
  @Event("scroll", window)
  OnScrollNative(){
    if(this.ScrollRAFLock || Date.now() - this.ScrollTimeLock < 200) {
      this.Trials++;
      return;
    }
    this.ScrollRAFLock = true;
    this.ScrollTimeLock = Date.now();
    setTimeout(() => {
      if(this.Trials) {
        this.Trials = 0;
        Dispatch("Scroll");
      }
    }, 200);
    requestAnimationFrame(() => {
      this.ScrollRAFLock = false;
      Dispatch("Scroll");
    });
  }

  EndZone = 0;
  @Event("Scroll", window)
  OnScroll(){
    const Body = document.body;
    const EOP = window.scrollY + Body.clientHeight;
    if((this.EndZone <= EOP ) && (EOP >= Body.scrollHeight - 200)){
      this.EndZone = Body.scrollHeight;
      Dispatch("EndZone");
    }
    if(EOP >= Body.scrollHeight){
      this.EndZone = 0;
      Dispatch("EndOfPage");
    }
  }

  Render() {
    return html`Hello World`;
  }
}
