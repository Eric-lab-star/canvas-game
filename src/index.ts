import { Player } from "./components/Player";
import { Projectile } from "./components/Projectile";
import "./style.css";

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
function animate() {
  requestAnimationFrame(animate);
  ctx?.clearRect(0, 0, innerWidth, innerHeight);
  player1.draw();
  projectiles.forEach((projectile) => projectile.update());
}
player1.draw();
animate();

const handleClick = (event: MouseEvent) => {
  const { clientX, clientY } = event;
  const x = clientX - Xcenter;
  const y = clientY - Ycenter;
  const angle = Math.atan2(y, x);
  const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle),
  };
  const projectile = new Projectile({
    x: Xcenter,
    y: Ycenter,
    radius: 3,
    color: "green",
    velocity: { x: velocity.x, y: velocity.y },
  });
  projectiles.push(projectile);
};

addEventListener("click", handleClick);
