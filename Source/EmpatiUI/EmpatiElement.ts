import "reflect-metadata";
import { LitElement } from "@polymer/lit-element";
import { TemplateResult } from "lit-html";
export { html } from "@polymer/lit-element";

export function CustomElement(Tag: string) {
  return function(Element: { new (): EmpatiElement }) {
    customElements.define(Tag, Element);
  };
}

export interface IProperyOptions<T = any, FX = void> {
  type?:
    | BooleanConstructor
    | DateConstructor
    | NumberConstructor
    | StringConstructor
    | ArrayConstructor
    | ObjectConstructor;
  notify?: boolean;
  reflectToAttribute?: boolean;
  readOnly?: boolean;
  computed?: string;
  observer?: string | ((val: T, old: T) => FX);
}

function DefineProperty<El extends EmpatiElement>(
  ElementPrototype: El,
  Key: string,
  Options: IProperyOptions = {}
) {
  const Prototype = ElementPrototype.constructor;
  if (!Prototype.hasOwnProperty("properties"))
    Object.defineProperty(Prototype, "properties", { value: {} });

  if (!("type" in Options))
    Options.type = Reflect.getMetadata("design:type", ElementPrototype, Key);

  (Prototype as any).properties[Key] = Options;
}

export function Property<El extends EmpatiElement>(
  ElementPrototype: El,
  Key: string
) {
  DefineProperty(ElementPrototype, Key);
}

export function PropertyDefinition(Properties: IProperyOptions) {
  return function<El extends EmpatiElement>(
    ElementPrototype: El,
    Key: string,
    Properties?: IProperyOptions
  ) {
    DefineProperty(ElementPrototype, Key, Properties);
  };
}

export function Event(Name: string, Target?: string | any, passive = false) {
  return function(target: any, prop: string, pd: PropertyDescriptor) {
    if (!("Events" in target)) target.Events = [];
    else if(!target.hasOwnProperty("Events")){
      target.SuperEvents = [...target.Events];
      target.Events = [];
    }
    target.Events.push({
      Name,
      Target,
      prop,
      passive
    });
  };
}

export const IESTarget = new EventTarget();

export function IESDispatch(Channel: string, Data: any){
  IESTarget.dispatchEvent(new CustomEvent(Channel, { detail: Data }));
}

export function IES(Name: string) {
  return function(target: any, prop: string, pd: PropertyDescriptor) {
    if (!("IEvents" in target)) target.IEvents = [];
    else if(!target.hasOwnProperty("IEvents")){
      target.SuperIEvents = [...target.IEvents];
      target.IEvents = [];
    }
    target.IEvents.push({
      Name,
      prop,
    });
  };
}

export function Check<T>(Fn: (This: EmpatiElement, New: T, Old: T) => boolean) {
  return function(target: any, prop: string) {
    target[`__${prop}CanChange`] = Fn;
  };
}

export type Properties<T> = { [K in keyof T]: T[K] };

interface LitHTMLElement extends LitElement {
  new (): HTMLElement & LitElement,
  prototype: HTMLElement & LitElement
}

export function Dispatch(Name: string, Data?: any){
  window.dispatchEvent(new CustomEvent(Name, { detail: Data }));
}

export default abstract class EmpatiElement extends (<LitHTMLElement>LitElement) {
  _render(props: object) {
    return this.Render(props as Properties<this>);
  }

  $: Record<string, EmpatiElement> = {};
  Init = false;
  
  get Root(){
    //@ts-ignore
    return this._root as ShadowRoot;
  }

  _shouldPropertyChange(Property: string, Value: any, OldValue: any) {
    const Super = super._shouldPropertyChange(Property, Value, OldValue);
    const Fn = `__${Property}CanChange`;
    if (Super && Fn in this) return this[Fn](this, Value, OldValue);
    return Super;
  }

  ReRender(){
    requestAnimationFrame(()=>{
      this.requestRender();
    });
  }

  IsSlotFull(Slot: string) {
    //@ts-ignore
    return !!Array.from(this.children).filter(x => x.getAttribute("slot") == Slot).length;
  }

  Dispatch(Name: string, Data?: any){
    this.dispatchEvent(new CustomEvent(Name, { detail: Data }));
  }

  async _didRender(){
    if(!this.Init){
      this.Init = true;
      //@ts-ignore
      const Map: EmpatiElement[] = this._root.querySelectorAll("[id]");
      for (const Item of Map) this.$[Item.id] = Item;
      const Self = this;
      let Target;
      if (this.Events){
        if(this.SuperEvents) 
          this.Events = this.Events.concat(this.SuperEvents);
        for (const Ev of this.Events) {
          if (Ev.Target)
            if (Ev.Target.constructor === String) Target = this.$[Ev.Target];
            else if (Ev.Target.constructor === Function) Target = Ev.Target(this);
            else Target = Ev.Target;
          else Target = this;
          Target.addEventListener(
            Ev.Name,
            function(this: HTMLElement, Event: UIEvent) {
              return Self[Ev.prop].call(Self, Event, this);
            },
            {
              passive: Ev.passive
            }
          );
        }
      }
      if ("FirstRender" in this) this.FirstRender();
    }
    if ("Rendered" in this) this.Rendered();
  }

  _firstRendered() {
    if ("Constr" in this) this.Constr();
  }

  constructor(){
    super();
    if(this.IEvents)
      for(const Ev of this.IEvents)
        IESTarget.addEventListener(Ev.Name, (Event: CustomEvent) => {
          this[Ev.prop].call(this, Event.detail, Event);
        });
  }

  abstract Render(Props: Properties<this>): TemplateResult;
}
