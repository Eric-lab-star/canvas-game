import { ctx } from "..";

export interface IArcProp {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity?: { dx: number; dy: number };
}
export class Arc {
  //types
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public color: string,
    public velocity?: { dx: number; dy: number }
  ) {}

  public draw() {
    if (ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
  public update() {
    if (this.velocity) {
      this.draw();
      this.x = this.x + this.velocity.dx;
      this.y = this.y + this.velocity.dy;
    }
  }
}
