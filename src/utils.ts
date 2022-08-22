import { Arc } from "./components/Arc";

export function velocity(
  Xnow: number,
  Ynow: number,
  Xlater: number,
  Ylater: number
) {
  const Xdist = Xlater - Xnow;
  const Ydist = Ylater - Ynow;
  const angle = Math.atan2(Ydist, Xdist);
  return { dx: Math.cos(angle), dy: Math.sin(angle) };
}

export function randomColor() {
  let color = "#";
  const charArray = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  [0, 1, 2, 3, 4, 5].forEach((v) => {
    const index = Math.floor(Math.random() * 16);
    color = color + charArray[index];
  });
  return color;
}

export function range(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const isProjectileOut = (arc: Arc) => {
  return (
    arc.x <= -arc.radius ||
    arc.x >= innerWidth + arc.radius ||
    arc.y <= -arc.radius ||
    arc.y >= innerHeight + arc.radius
  );
};

export const distance = (A: Arc, B: Arc) => {
  return Math.hypot(A.x - B.x, A.y - B.y);
};

export const isTouched = (A: Arc, B: Arc) => {
  const AnBDistance = distance(A, B);
  return Boolean(AnBDistance <= A.radius + B.radius);
};
