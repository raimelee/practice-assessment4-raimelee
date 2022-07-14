const countLetters = (word, letter) => {
  word1 = word.toLowerCase();
  let letter1 = letter.toLowerCase();
  // the first choice is a loop that only works on arrays []. This is shorter and more impressive.
  return word1.split("").reduce((pv, cv) => {
    return cv === letter1 ? pv + 1 : pv;
  }, 0);
  //  can be shortened to this:
  // const countLetters = (word, letter) => word.split("").reduce((pv, cv) => (cv === letter ? pv + 1 : pv), 0);

  // This option is a for loop:
  //   let counter = 0;
  //   for (character of word) {
  //     if (letcharacterter === letter) {
  //       counter++;
  //     }
  //   }
  //   return counter;
};

const convertTemperature = (temperature, unit) => {
  if (temperature.includes("F", 0) && unit === "C") {
    temperature = parseInt(temperature);
    temperature = (temperature - 32) / 1.8;
    return temperature;
  } else if (temperature.includes("C", 0) && unit === "F") {
    temperature = parseInt(temperature);
    temperature = temperature * 1.8 + 32;
    return temperature;
  } else {
    temperature = parseInt(temperature);
    return temperature;
  }
};

const reverseCase = (string) => {
  let newString = "";
  for (let letter of string) {
    if (letter === letter.toUpperCase()) {
      newString += letter.toLowerCase();
    } else {
      newString += letter.toUpperCase();
    }
  }
  return newString;
};

const scorePalindrome = (string) => {
  let counter = 0;
  for (let i = 0; i <= string.length / 2 - 1; i++) {
    if (string[i] === string[string.length - (1 + i)]) {
      counter++;
    }
  }
  return counter;
};

module.exports = {
  countLetters,
  convertTemperature,
  reverseCase,
  scorePalindrome,
};
