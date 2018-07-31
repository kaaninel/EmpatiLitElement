import { html } from "./EmpatiElement";
import { TemplateResult } from "lit-html";

export enum BorderRadius {
  Block  = "3px",
  Circle = "50%"
}

export enum BreakPoints {
  Small = 640,
  Medium = 960,
  Large = 1200,
  XLarge = 1600
}

type Printable = string | TemplateResult | TemplateResult[];

export function BPVisibleDown(Point: BreakPoints, Value: Printable){
  return html`@media(max-width: ${Point}px) { ${Value} }`;
}

export function BPVisibleUp(Point: BreakPoints, Value: Printable) {
  return html`@media(min-width: ${Point}px) { ${Value} }`;
}

export function BPDown(Point: BreakPoints): boolean;
export function BPDown<T>(Point: BreakPoints, O1: T, O2: T): T;
export function BPDown<T>(Point: BreakPoints, O1?: T, O2?: T){
  const Res = Point >= window.innerWidth;
  if(O1) return Res ? O1 : O2;
  return Res;
}

export function BPUp(Point: BreakPoints): boolean;
export function BPUp<T>(Point: BreakPoints, O1: T, O2: T): T;
export function BPUp<T>(Point: BreakPoints, O1?: T, O2?: T) {
  const Res = Point <= window.innerWidth;
  if (O1) return Res ? O1 : O2;
  return Res;
}

function DownGen(Point: BreakPoints){
  return function<T>(O1: T, O2: T){
    return BPDown(Point, O1, O2);
  }
}

function UpGen(Point: BreakPoints) {
  return function <T>(O1: T, O2: T) {
    return BPDown(Point, O1, O2);
  }
}

export const SmallDown = DownGen(BreakPoints.Small);
export const MediumDown = DownGen(BreakPoints.Medium);
export const LargeDown = DownGen(BreakPoints.Large);
export const XLargeDown = DownGen(BreakPoints.XLarge);

export const SmallUp = UpGen(BreakPoints.Small);
export const MediumUp = UpGen(BreakPoints.Medium);
export const LargeUp = UpGen(BreakPoints.Large);
export const XLargeUp = UpGen(BreakPoints.XLarge);

export enum Color {
  Background = "#EDF2F6",
  Orange     = "#FF5E3A",
  Blue       = "#38A9FF",
  Purple     = "#7C5AC2"
}

export enum FontFamily {
  Default = "'Roboto', sans-serif"
}

export enum Shadow {
  Dp1  = "0 1px 3px rgba(0,0,0,0.12),   0 1px 2px rgba(0,0,0,0.24)",
  Dp3  = "0 3px 6px rgba(0,0,0,0.16),   0 3px 6px rgba(0,0,0,0.23)",
  Dp4  = "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  Dp10 = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  Dp15 = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
}

export enum Transition {
  X  = ".15s",
  X2 = ".30s"
}

export enum Zindex {
  Header = "1100",
  BackDrop = "1200",
  DropDown = "1300",
  BottomBar = "1000",
  SideNav = "1600",
  Toast = "1000",
  Modal = "1000",
  Notification = "1000",
  Loader = "1000",
  Tooltip = "1000",
  ChatBox = "1000",
  ProfileCard = "1000"
}

export const MarginLR  = (x: number) => html`margin-left: ${x}px; margin-right: ${x}px`;
export const MarginTB  = (x: number) => html`margin-top: ${x}px; margin-bottom: ${x}px`;
export const PaddingLR = (x: number) => html`padding-left: ${x}px; padding-right: ${x}px`;
export const PaddingTB = (x: number) => html`padding-top: ${x}px; padding-bottom: ${x}px`;

export const DontTouch = html`user-select: none; -moz-user-select: none; -webkit-user-drag: none`;
export const FingerSize = html`min-width: 40px;  min-height: 40px`;
export const FingerSizeFixed = html`width: 40px; height: 40px`;
export const FlexCenter = html`display: flex; align-items: center; justify-content: center`;
export const FullAbsolute = html`position: absolute; top: 0; left: 0; right: 0; bottom: 0`;
export const FullFixed = html`position: fixed; top: 0; left: 0; right: 0; bottom: 0`;
export const FullSize = html`width: 100%; height: 100%`;
export const VerticalCenter = html`display: flex; align-items: center;`;

const Style = html`
  <style>
    :host {
      display: block;
      box-sizing: border-box;
    }
  
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    :focus {
      outline: none;
    }
    
    /* Scrollbar */
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: #F1F1F1;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #C2C5D9; 
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #9A9FBF; 
    }
  </style>`;
export default Style;