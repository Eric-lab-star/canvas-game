import { animationId, enemies, particles, player, projectiles } from "..";
import { isTouched } from "../utils";
import createParticle from "./createParticles";
import removeProjectileAndEnemy from "./removeEnemyandProjectile";
import reduceEnemySizeAndRemoveProjectile from "./reduceEnemySizeandRemoveProjectile";
export default function handleEnemies() {
  const minRadius = 10;
  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();
    if (isTouched(enemy, player)) {
      cancelAnimationFrame(animationId);
    }
    projectiles.forEach((projectile, projectileIndex) => {
      if (isTouched(enemy, projectile)) {
        createParticle({ enemy, projectile });
        if (enemy.radius - 10 > minRadius) {
          reduceEnemySizeAndRemoveProjectile({ enemy, projectileIndex });
          return;
        } else {
          removeProjectileAndEnemy({ enemyIndex, projectileIndex });
          return;
        }
      }
    });
  });
}
