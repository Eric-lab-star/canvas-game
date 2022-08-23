import { ctx } from "..";
import { Arc, IArcProp } from "./Arc";

export default function getParticle({ x, y, color }: IParams) {
  class Particle extends Arc {
    public alpha: number = 1;
    constructor({ x, y, radius, color, velocity }: IArcProp) {
      super(x, y, radius, color, velocity);
    }
    draw() {
      if (ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }
    public update(): void {
      if (this.velocity) {
        this.draw();
        this.x = this.x + this.velocity.dx;
        this.y = this.y + this.velocity.dy;
        this.alpha -= 0.01;
      }
    }
  }

  const newParticle = new Particle({
    x,
    y,
    color,
    radius: 3,
    velocity: { dx: Math.random() - 0.5, dy: Math.random() - 0.5 },
  });

  return newParticle;
}

interface IParams {
  x: number;
  y: number;
  color: string;
}
