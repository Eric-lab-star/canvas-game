import { animate } from "./utils";
const body = document.querySelector("body");
const canvas = document.createElement("canvas");
body?.appendChild(canvas);
const ctx = canvas.getContext("2d");

abstract class Arc {
  constructor(
    protected x: number,
    protected y: number,
    protected radius: number,
    protected color: string
  ) {}
  public draw() {
    if (ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
}

class Player extends Arc {}

const player1 = new Player(100, 100, 30, "red");
player1.draw();

console.log("heelo");
