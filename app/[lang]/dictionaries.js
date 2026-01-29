import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((mod) => mod.default),
  bn: () => import("./dictionaries/bn.json").then((mod) => mod.default),
};

export const getDictionary = async (lang) => {
  // Check if the requested language is supported, and fall back to English if not.
  if (dictionaries[lang]) {
    return dictionaries[lang]();
  }
  return dictionaries.en();
};
