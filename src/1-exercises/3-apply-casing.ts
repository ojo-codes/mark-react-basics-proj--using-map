interface IStringCasing {
  string: string;
  casing: "upper" | "lower" | "preserve";
}

function applyCasing(casings: IStringCasing[]): string[] {
  return casings.map((stringCasing) => {
    if (stringCasing.casing === "upper") {
      return stringCasing.string.toUpperCase();
    } else if (stringCasing.casing === "lower") {
      return stringCasing.string.toLowerCase();
    } else {
      return stringCasing.string;
    }
  });
}

export { applyCasing, IStringCasing };
