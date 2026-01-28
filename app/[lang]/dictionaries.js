import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((mod) => mod.default),
  bn: () => import("./dictionaries/bn.json").then((mod) => mod.default),
};

export const getDictionary = async (lang) => dictionaries[lang]();
