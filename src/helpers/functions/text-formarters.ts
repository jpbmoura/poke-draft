export function capitalizeFirstLetter(value: string) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

export function formatMoveName(value: string) {
  //text exemple: comet-punch
  // text expected: Comet Punch

  return String(value)
    .split("-")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
}
