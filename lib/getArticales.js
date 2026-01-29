import data from "../data/data.json";

export const getAllArticales = () => {
  return data;
};

export const getArticaleBySlug = (slug) => {
  return data.find((articale) => articale.slug === slug);
};

export const getAllArticalesDynamic = async () => {
  const data = await import("@/data/data.json");
  return data.default;
};

export const getArticaleBySlugDynamic = async (slug) => {
  const data = await import("@/data/data.json");
  return data.default.find((articale) => articale.slug === slug);
};
