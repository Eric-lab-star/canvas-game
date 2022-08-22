import { Xcenter, Ycenter } from "..";
import { Arc } from "./Arc";

export default function getPlayer() {
  const player: Arc = new Arc({
    x: Xcenter,
    y: Ycenter,
    radius: 30,
    color: "blue",
  });
  return player;
}
