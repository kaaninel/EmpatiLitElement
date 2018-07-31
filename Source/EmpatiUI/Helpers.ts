import { html } from "./EmpatiElement";

export class Colors{
  
  static HexParse(Color: string) {
    if (!Color.startsWith("#")) throw "Color doesn't start with #";
    Color = Color.substr(1);
    const N = parseInt(Color, 16);
    return [N >> 16, (N >> 8) & 0xFF, N & 0xFF, 1];
  }

  static BuildHex(Color: number[]) {
    return `#${(Color[0] << 16 | Color[1] << 8 | Color[2]).toString(16)}`;
  }

  static BuildRGBAlpha(Color: number[], Alpha: number) {
    Color[3] = Alpha;
    return `rgba(${Color.join(", ")})`;
  }

  static BuildRGBA(Color: number[]) {
    return `rgba(${Color.join(", ")})`;
  }

  static Percent(Color: number[], Percent: number) {
    Color[0] += Color[0] * Percent / 100;
    Color[1] += Color[1] * Percent / 100;
    Color[2] += Color[2] * Percent / 100;
    if (Color[0] > 255) Color[0] = 255;
    else if (Color[0] < 0) Color[0] = 0;
    if (Color[1] > 255) Color[1] = 255;
    else if (Color[1] < 0) Color[1] = 0;
    if (Color[2] > 255) Color[2] = 255;
    else if (Color[2] < 0) Color[2] = 0;
    return Color;
  }

  static Add(Color: number[], Amount: number) {
    Color[0] += Amount;
    Color[1] += Amount;
    Color[2] += Amount;
    if (Color[0] > 255) Color[0] = 255;
    else if (Color[0] < 0) Color[0] = 0;
    if (Color[1] > 255) Color[1] = 255;
    else if (Color[1] < 0) Color[1] = 0;
    if (Color[2] > 255) Color[2] = 255;
    else if (Color[2] < 0) Color[2] = 0;
    return Color;
  }

  static HexPercent(Clr: string, Percent: number) {
    return Colors.BuildHex(Colors.Percent(Colors.HexParse(Clr), Percent));
  }

  static HexAlpha(Clr: string, Alpha: number) {
    return Colors.BuildRGBAlpha(Colors.HexParse(Clr), Alpha);
  }

  static DarkTransparent(x: number){
    return html`rgba(0,0,0,${x})`;
  }
  static LightTransparent(x: number) {
    return html`rgba(255,255,255,${x})`;
  }
}

export function OnlyIf(Condition: boolean, Data: any){
  return Condition ? Data : "";
}