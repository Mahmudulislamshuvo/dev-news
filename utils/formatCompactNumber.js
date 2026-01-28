export const formatCompactNumber = (number) => {
  const num = Number(number);

  if (isNaN(num)) return "0";

  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  });

  return formatter.format(num).toLowerCase();
};
