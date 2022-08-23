import { Xcenter, Ycenter } from "..";
import { Arc } from "./Arc";

export default function getProjectile(dx: number, dy: number) {
  const projectile = new Arc(Xcenter, Ycenter, 5, "blue", {
    dx: dx * 4,
    dy: dy * 4,
  });
  return projectile;
}
