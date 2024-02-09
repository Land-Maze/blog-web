type LetterToColorDictType = {
  [letter: string]: string;
};

const letterToColorDict: LetterToColorDictType = {
  A: "Red",
  B: "Orange",
  C: "Yellow",
  D: "Green",
  E: "Blue",
  F: "Indigo",
  G: "Violet",
  H: "Pink",
  I: "Turquoise",
  J: "Gold",
  K: "Silver",
  L: "Brown",
  M: "Maroon",
  N: "Olive",
  O: "Lime",
  P: "Teal",
  Q: "Peach",
  R: "Magenta",
  S: "Lavender",
  T: "Cyan",
  U: "Beige",
  V: "Salmon",
  W: "Khaki",
  X: "Rose",
  Y: "Plum",
  Z: "SlateGray",
};

export const colorPickerLetter = (letter: string): string => {
    const letterUpperCase = letter.toUpperCase();
    // console.log("letterToColorDict[letterUpperCase]", letterToColorDict[letterUpperCase])
    return letterToColorDict[letterUpperCase].toLocaleLowerCase() || "Black".toLocaleLowerCase();
};
