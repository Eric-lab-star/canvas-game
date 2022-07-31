import { Player } from "./components/Player";
import { Projectile } from "./components/Projectile";
import "./style.css";
import { randomColor, velocity } from "./utils";

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
  color: "red",
});
const projectiles: Projectile[] = [];
const enemies: Projectile[] = [];
function animate() {
  requestAnimationFrame(animate);
  ctx?.clearRect(0, 0, innerWidth, innerHeight);
  player1.draw();
  projectiles.forEach((projectile) => projectile.update());
  enemies.forEach((enemy) => enemy.update());
}

const spawnEnemy = () => {
  setInterval(() => {
    let x;
    let y;
    let color = randomColor();
    let radius;
    radius = Math.random() * 5 + 3;
    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? -radius : innerWidth + radius;
      y = Math.random() * innerHeight;
    } else {
      x = Math.random() * innerWidth;
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
    radius: 2,
    color: "blue",
    velocity: { x: dx, y: dy },
  });
  projectiles.push(projectile);
};

addEventListener("click", handleClick);
player1.draw();
spawnEnemy();
animate();
