import { Player } from "./components/Player";
import { Projectile } from "./components/Projectile";
import "./style.css";
import { randomColor, range, velocity } from "./utils";

const body = document.querySelector("body");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
body?.appendChild(canvas);

const Xcenter = canvas.width / 2;
const Ycenter = canvas.height / 2;
const player1 = new Player({
  x: Xcenter,
  y: Ycenter,
  radius: 30,
  color: "blue",
});
const projectiles: Projectile[] = [];
const enemies: Projectile[] = [];
let animationId: number;
function animate() {
  animationId = requestAnimationFrame(animate);
  ctx?.clearRect(0, 0, innerWidth, innerHeight);
  player1.draw();
  projectiles.forEach((projectile) => projectile.update());
  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();
    const dist = Math.hypot(enemy.x - player1.x, enemy.y - player1.y);
    if (dist - enemy.radius - player1.radius <= 0) {
      cancelAnimationFrame(animationId);
    }
    projectiles.forEach((projectile, projectileIndex) => {
      const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
      if (dist - enemy.radius - projectile.radius <= 0) {
        setTimeout(() => {
          enemies.splice(enemyIndex, 1);
          projectiles.splice(projectileIndex, 1);
        }, 0);
      }
    });
  });
}

const spawnEnemy = () => {
  setInterval(() => {
    let x;
    let y;
    let color = randomColor();
    let radius;
    radius = range(4, 10);
    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? -radius : innerWidth + radius;
      y = range(0, innerHeight);
    } else {
      x = range(0, innerWidth);
      y = Math.random() < 0.5 ? -radius : innerHeight + radius;
    }
    const { dx, dy } = velocity(x, y, Xcenter, Ycenter);
    const enemy = new Projectile({
      x,
      y,
      color,
      velocity: { x: dx, y: dy },
      radius,
    });
    enemies.push(enemy);
  }, 1000);
};

const handleClick = (event: MouseEvent) => {
  const { clientX, clientY } = event;
  const { dx, dy } = velocity(Xcenter, Ycenter, clientX, clientY);
  const projectile = new Projectile({
    x: Xcenter,
    y: Ycenter,
    radius: 10,
    color: "blue",
    velocity: { x: dx, y: dy },
  });
  projectiles.push(projectile);
};

addEventListener("click", handleClick);

spawnEnemy();
animate();
