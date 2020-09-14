import { Application } from "pixi.js";
import Cuby from "./Cuby";

type Color =
  | "blue"
  | "red"
  | "yellow"
  | "green"
  | "orange"
  | "purple"
  | "indigo";
export default function main(app: Application, color: Color) {
  const block = Cuby(color, 100);

  block.position.set(app.screen.width / 2, app.screen.height / 2);
  block.pivot.set(block.width / 2, block.height / 2);

  app.stage.addChild(block);
}
