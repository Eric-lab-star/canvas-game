import { Arc } from "./components/Arc";
import "./style.css";
import { isProjectileOut, randomColor, range, velocity } from "./utils";

const body = document.querySelector("body");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
body?.appendChild(canvas);

const Xcenter = canvas.width / 2;
const Ycenter = canvas.height / 2;

const player1: Arc = new Arc({
  x: Xcenter,
  y: Ycenter,
  radius: 30,
  color: "blue",
});

const projectiles: Arc[] = [];

const enemies: Arc[] = [];

let animationId: number;

function animate() {
  //handle ctx
  if (!ctx)
    return console.log("canvase 2d context is not provided from index.ts");
  //create animtation loop
  animationId = requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  player1.draw();
  //
  projectiles.forEach((projectile, index) => {
    projectile.update();
    //when projectile is outside screen, remove projectile
    if (isProjectileOut(projectile)) {
      setTimeout(() => {
        projectiles.splice(index, 1);
      }, 0);
    }
  });
  return;
  //
  enemies.forEach((enemy, enemyIndex) => {
    enemy.update();
    const dist = Math.hypot(enemy.x - player1.x, enemy.y - player1.y);
    //when enemy hits player, end game
    if (dist - enemy.radius - player1.radius <= 0) {
      cancelAnimationFrame(animationId);
    }

    projectiles.forEach((projectile, projectileIndex) => {
      const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
      //when projectile hits enemy
      if (dist - enemy.radius - projectile.radius <= 0) {
        if (enemy.radius - 10 > 10) {
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

const spawnEnemy = () => {
  setInterval(() => {
    let x;
    let y;
    let color = randomColor();
    let radius;
    radius = range(30, 50);
    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? -radius : innerWidth + radius;
      y = range(0, innerHeight);
    } else {
      x = range(0, innerWidth);
      y = Math.random() < 0.5 ? -radius : innerHeight + radius;
    }
    const { dx, dy } = velocity(x, y, Xcenter, Ycenter);
    const enemy = new Arc({
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
  const projectile = new Arc({
    x: Xcenter,
    y: Ycenter,
    radius: 5,
    color: "blue",
    velocity: { x: dx * 4, y: dy * 4 },
  });
  projectiles.push(projectile);
};

addEventListener("click", handleClick);

if (ctx) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  spawnEnemy();
  animate();
}
