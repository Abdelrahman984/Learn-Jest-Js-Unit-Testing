export function filterName(name) {
  if (name.startsWith(" ") || name.endsWith(" ")) {
    return name.trim();
  }
  if (name.startsWith("_") || name.endsWith("_")) {
    return name.substring(1, name.length - 1);
  }
  if (name.length > 14) {
    return name.substring(0, 14);
  }
  if (name === "Hell") {
    throw Error("This Name Is Not Allowed");
  }
  return name;
}
