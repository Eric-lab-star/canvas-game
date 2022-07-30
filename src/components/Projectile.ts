import { Arc, IArcProp } from "./Arc";

export interface IProjectile extends IArcProp {
  velocity: { x: number; y: number };
}
export class Projectile extends Arc {
  protected velocity: { x: number; y: number };
  constructor({ x, y, velocity, radius, color }: IProjectile) {
    super({ x, y, radius, color });
    this.velocity = velocity;
  }
  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}
