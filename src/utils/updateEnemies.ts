import { animationId, end, enemies, number, player, projectiles } from "..";
import { isTouched } from "../utils";
import createParticle from "./createParticles";
import removeProjectileAndEnemy from "./removeEnemyandProjectile";
import reduceEnemySizeAndRemoveProjectile from "./reduceEnemySizeandRemoveProjectile";
export default function handleEnemies() {
  const minRadius = 10;
  for (let enemyIndex = enemies.length - 1; enemyIndex >= 0; enemyIndex--) {
    const enemy = enemies[enemyIndex];
    enemy.update();
    if (isTouched(enemy, player)) {
      end.appendChild(number);
      end.style.display = "block";
      cancelAnimationFrame(animationId);
    }
    for (
      let projectileIndex = projectiles.length - 1;
      projectileIndex >= 0;
      projectileIndex--
    ) {
      const projectile = projectiles[projectileIndex];
      if (isTouched(enemy, projectile)) {
        createParticle({ enemy, projectile });
        if (enemy.radius - 10 > minRadius) {
          reduceEnemySizeAndRemoveProjectile({ enemy, projectileIndex });
          return;
        } else {
          removeProjectileAndEnemy({ enemyIndex, projectileIndex });
          number.innerText = parseInt(number.innerText) + 1 + "";
          return;
        }
      }
    }
  }
}
