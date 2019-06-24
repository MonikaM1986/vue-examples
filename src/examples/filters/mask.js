export function mask(value, length = value.length, char = "*") {
  const masked = Array.from({ length })
    .fill(char)
    .join("");
  const visible = value.substring(length);
  return masked + visible;
}
