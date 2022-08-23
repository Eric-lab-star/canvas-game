import { Arc } from "./components/Arc";
import getPlayer from "./components/Player";
import getProjectile from "./components/Projectile";
import "./style.css";
import { velocity } from "./utils";
import handleEnemies from "./utils/handleEnemies";
import handleParticles from "./utils/handleParticles";
import handleProjectiles from "./utils/handleProjectile";
import createEnemy from "./utils/createEnemy";

const body = document.querySelector("body");
const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
body?.appendChild(canvas);

export const Xcenter = canvas.width / 2;
export const Ycenter = canvas.height / 2;
export const projectiles: Arc[] = [];
export const enemies: Arc[] = [];
export const particles: Arc[] = [];
export const player = getPlayer();
export let animationId: number;

function animate() {
  if (!ctx) {
    return console.log("canvase 2d context is not provided from index.ts");
  }
  animationId = requestAnimationFrame(animate);
  //fade-out
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  player.draw();

  handleParticles();
  handleProjectiles();
  handleEnemies();
}

//event handlers
const handleClick = (event: MouseEvent) => {
  const { clientX, clientY } = event;
  const { dx, dy } = velocity(Xcenter, Ycenter, clientX, clientY);
  const projectile = getProjectile(dx, dy);
  projectiles.push(projectile);
};

addEventListener("click", handleClick);
if (ctx) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  player.draw();
  createEnemy();
  animate();
}
