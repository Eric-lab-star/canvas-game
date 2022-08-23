import { enemies } from "..";
import getEnemy from "../components/Enemy";
const createEnemy = () => {
  setInterval(() => {
    const enemy = getEnemy();
    enemies.push(enemy);
  }, 1000);
};

export default createEnemy;
