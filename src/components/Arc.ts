export interface IArcProp {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity?: { x: number; y: number };
}
export class Arc {
  //types
  private canvas = document.querySelector("canvas");
  private ctx = this.canvas?.getContext("2d");
  public x: number;
  public y: number;
  public radius: number;
  public color: string;
  public velocity: { x: number; y: number };

  constructor({ x, y, radius, color, velocity }: IArcProp) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity || { x: 0, y: 0 };
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
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}
