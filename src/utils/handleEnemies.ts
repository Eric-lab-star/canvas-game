import { animationId, enemies, player, projectiles } from "..";
import { distance, isTouched } from "../utils";
import gsap from "gsap";
export default function handleEnemies() {
  const minRadius = 10;
  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();
    if (isTouched(enemy, player)) {
      cancelAnimationFrame(animationId);
    }
    projectiles.forEach((projectile, projectileIndex) => {
      if (isTouched(enemy, projectile)) {
        if (enemy.radius - 10 > minRadius) {
          gsap.to(enemy, {
            radius: enemy.radius - 10,
          });
          enemy.radius -= 10;
          setTimeout(() => {
            projectiles.splice(projectileIndex, 1);
          }, 0);
          return;
        } else {
          setTimeout(() => {
            enemies.splice(enemyIndex, 1);
            projectiles.splice(projectileIndex, 1);
          }, 0);
          return;
        }
      }
    });
  });
}
