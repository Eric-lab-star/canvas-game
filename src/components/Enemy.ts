import { Xcenter, Ycenter } from "..";
import { randomColor, range, velocity } from "../utils";
import setRandomLocation from "../utils/setRandomLocatioin";
import { Arc } from "./Arc";

export default function getEnemy() {
  let radius = range(30, 50);
  const color = randomColor();
  const { x, y } = setRandomLocation(radius);
  const enemy = new Arc(x, y, radius, color, velocity(x, y, Xcenter, Ycenter));
  return enemy;
}
