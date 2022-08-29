import gsap from "gsap";
import { projectiles } from "..";
import { Arc } from "../components/Arc";

export default function reduceEnemySizeAndRemoveProjectile({
  enemy,
  projectileIndex,
}: IParams) {
  gsap.to(enemy, {
    radius: enemy.radius - 10,
  });
  enemy.radius -= 10;

  projectiles.splice(projectileIndex, 1);
}

interface IParams {
  enemy: Arc;
  projectileIndex: number;
}
