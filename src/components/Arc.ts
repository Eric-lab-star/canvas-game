export interface IArcProp {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity?: { dx: number; dy: number };
}
export class Arc {
  //types
  private canvas = document.querySelector("canvas");
  private ctx = this.canvas?.getContext("2d");
  public x: number;
  public y: number;
  public radius: number;
  public color: string;
  public velocity?: { dx: number; dy: number };

  constructor({ x, y, radius, color, velocity }: IArcProp) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  public draw() {
    const ctx = this.ctx;
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
