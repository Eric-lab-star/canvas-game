import { particles } from "..";
import { Arc } from "../components/Arc";
import getParticle from "../components/Particle";

export default function createParticle({ enemy, projectile }: IParams) {
  for (let i = 0; i < 8; i++) {
    const particle = getParticle({
      color: enemy.color,
      x: projectile.x,
      y: projectile.y,
    });
    particles.push(particle);
  }
}

interface IParams {
  enemy: Arc;
  projectile: Arc;
}
