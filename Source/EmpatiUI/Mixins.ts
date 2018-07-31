import { LitElement } from "@polymer/lit-element";
import { Event } from "./EmpatiElement";
//@ts-ignore
import { unsafeHTML } from "lit-html/lib/unsafe-html";
type Constructor<T = LitElement> = new (...args: any[]) => T;

export function Resizable<T extends Constructor>(Constr: T) {
  class ResizableClass extends Constr {
    @Event("resize", window)
    OnResize() {
      this.requestRender();
    }
  }
  return ResizableClass;
}
