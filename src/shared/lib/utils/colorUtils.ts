export function hexToRgb(hexa: string): string | null {
  // Remove the hash if it exists
  const hex = hexa.replace(/^#/, '');

  // Parse the hex values to RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r},${g},${b}`;
}
