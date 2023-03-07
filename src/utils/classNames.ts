export const classNames = (map: Record<string, boolean>) => {
  return Object.keys(map)
    .filter((key) => Boolean(map[key]))
    .join(' ');
};
