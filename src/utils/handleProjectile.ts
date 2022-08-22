import { projectiles } from "..";
import { Arc } from "../components/Arc";
import { isProjectileOut } from "../utils";

export default function handleProjectiles() {
  projectiles.forEach((projectile, projectileIndex) => {
    projectile.update();
    //when projectile is outside screen, remove projectile
    if (isProjectileOut(projectile)) {
      setTimeout(() => {
        projectiles.splice(projectileIndex, 1);
      }, 0);
    }
  });
}
