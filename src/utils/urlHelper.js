export const updateUrl = (type, subType, projectId) => {
  const url = new URL(window.location);
  if (type) url.searchParams.set("type", type);
  else url.searchParams.delete("type");

  if (subType) url.searchParams.set("subType", subType);
  else url.searchParams.delete("subType");

  if (projectId) url.searchParams.set("projectId", projectId);
  else url.searchParams.delete("projectId");

  window.history.pushState({ type, subType, projectId }, "", url);
};
