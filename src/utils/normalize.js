export const normalizeKey = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
};
