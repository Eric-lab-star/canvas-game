import { particles } from "..";

export default function handleParticles() {
  particles.forEach((particle) => particle.update());
}
