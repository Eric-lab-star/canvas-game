import { Xcenter, Ycenter } from "..";
import { Arc } from "./Arc";

export default function getPlayer() {
  const player: Arc = new Arc(Xcenter, Ycenter, 30, "blue");
  return player;
}
