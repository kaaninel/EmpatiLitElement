import { LitElement } from "@polymer/lit-element";
import { TemplateResult } from "lit-html";
export { html } from "@polymer/lit-element";

export function CustomElement(Tag: string) {
  return function(Element: { new (): LitElement }) {
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

function DefineProperty<El extends LitElement>(
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

export function Property<El extends LitElement>(
  ElementPrototype: El,
  Key: string
) {
  DefineProperty(ElementPrototype, Key);
}

export function PropertyDefinition(Properties: IProperyOptions) {
  return function<El extends LitElement>(
    ElementPrototype: El,
    Key: string,
    Properties?: IProperyOptions
  ) {
    DefineProperty(ElementPrototype, Key, Properties);
  };
}

export function Event(Name: string, Target?: string, passive = false) {
  return function(target: any, prop: string, pd: PropertyDescriptor) {
    if (!("Events" in target)) target.Events = [];
    target.Events.push({
      Name,
      Target,
      prop,
      passive
    });
  };
}

export function Check<T>(Fn: (This: EmpatiElement, New: T, Old: T) => boolean) {
  return function(target: any, prop: string) {
    target[`__${prop}CanChange`] = Fn;
  };
}

export type Properties<T> = { [K in keyof T]: T[K] };

export default abstract class EmpatiElement extends LitElement {
  _render(props: object) {
    return this.Render(props as Properties<this>);
  }

  $: Record<string, HTMLElement> = {};

  _shouldPropertyChange(Property: string, Value: any, OldValue: any) {
    const Super = super._shouldPropertyChange(Property, Value, OldValue);
    const Fn = `__${Property}CanChange`;
    if (Super && Fn in this) return this[Fn](this, Value, OldValue);
    return Super;
  }

  _firstRendered() {
    //@ts-ignore
    const Map: HTMLElement[] = this._root.querySelectorAll("[id]");
    for (const Item of Map) this.$[Item.id] = Item;
    const Self = this;
    if (this.Events)
      for (const Ev of this.Events)
        if (Ev.Target)
          this.$[Ev.Target].addEventListener(
            Ev.Name,
            function(Event) {
              return Self[Ev.prop].call(Self, Event, this);
            },
            {
              passive: Ev.passive
            }
          );
        else
          this.addEventListener(
            Ev.Name,
            function(this: HTMLElement, Event: UIEvent) {
              return Self[Ev.prop].call(Self, Event, this);
            },
            {
              passive: Ev.passive
            }
          );
  }

  abstract Render(Props: Properties<this>): TemplateResult;
}
