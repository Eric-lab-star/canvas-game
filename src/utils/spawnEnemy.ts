import { enemies, projectiles, Xcenter, Ycenter } from "..";
import { Arc } from "../components/Arc";
import getEnemy from "../components/Enemy";
import { randomColor, range, velocity } from "../utils";
const spawnEnemy = () => {
  setInterval(() => {
    const enemy = getEnemy();
    enemies.push(enemy);
  }, 1000);
};

export default spawnEnemy;
