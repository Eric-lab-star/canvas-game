import { Arc } from "./Arc";

export default function getParticle({ x, y, color }: IParams) {
  const particle = new Arc({
    x,
    y,
    color,
    radius: 3,
    velocity: { dx: Math.random() - 0.5, dy: Math.random() - 0.5 },
  });
  return particle;
}

interface IParams {
  x: number;
  y: number;
  color: string;
}
