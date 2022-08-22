import { range } from "../utils";

export default function setRandomLocation(radius: number) {
  let x, y;
  if (Math.random() < 0.5) {
    x = Math.random() < 0.5 ? -radius : innerWidth + radius;
    y = range(0, innerHeight);
  } else {
    x = range(0, innerWidth);
    y = Math.random() < 0.5 ? -radius : innerHeight + radius;
  }
  return { x, y };
}
