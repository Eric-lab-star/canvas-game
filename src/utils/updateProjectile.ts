import { projectiles } from "..";
import { Arc } from "../components/Arc";
import { isProjectileOut } from "../utils";

export default function handleProjectiles() {
  for (
    let projectileIndex = projectiles.length - 1;
    projectileIndex >= 0;
    projectileIndex--
  ) {
    const projectile = projectiles[projectileIndex];
    projectile.update();
    if (isProjectileOut(projectile)) {
      projectiles.splice(projectileIndex, 1);
    }
  }
}
