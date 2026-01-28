import data from "../data/data.json";

export const getAllArticales = () => {
  return data;
};

export const getArticaleBySlug = (slug) => {
  return data.find((articale) => articale.slug === slug);
};
