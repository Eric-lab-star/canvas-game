import { enemies, projectiles } from "..";

export default function removeProjectileAndEnemy({
  enemyIndex,
  projectileIndex,
}: IParams) {
  enemies.splice(enemyIndex, 1);
  projectiles.splice(projectileIndex, 1);
}

interface IParams {
  enemyIndex: number;
  projectileIndex: number;
}
