import lopkg from "lodash";
import { getLetterCount } from "./letter-count.js";

export const formatString = (string) =>
  string.toLowerCase().replace(/\s+/g, "");

export const isAnagram = (string1, string2) => {
  const string1LetterCount = getLetterCount(formatString(string1));
  const string2LetterCount = getLetterCount(formatString(string2));

  return lopkg.isEqual(string1LetterCount, string2LetterCount);
};
