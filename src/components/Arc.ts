export interface IArcProp {
  x: number;
  y: number;
  radius: number;
  color: string;
}
export class Arc {
  private canvas = document.querySelector("canvas");
  private ctx = this.canvas?.getContext("2d");
  public x: number;
  public y: number;
  public radius: number;
  public color: string;
  constructor({ x, y, radius, color }: IArcProp) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
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
}
