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
