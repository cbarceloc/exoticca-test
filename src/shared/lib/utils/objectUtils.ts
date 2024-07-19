// function to remove undefined values from an object
export function getCleanObj(obj: Record<string, unknown>) {
  return Object.keys(obj).reduce((acc: Record<string, unknown>, key: string) => {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
