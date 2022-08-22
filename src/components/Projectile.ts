import { Xcenter, Ycenter } from "..";
import { Arc } from "./Arc";

export default function getProjectile(dx: number, dy: number) {
  const projectile = new Arc({
    x: Xcenter,
    y: Ycenter,
    radius: 5,
    color: "blue",
    velocity: { dx: dx * 4, dy: dy * 4 },
  });
  return projectile;
}
