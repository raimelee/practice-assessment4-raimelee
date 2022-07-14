const {
  countLetters,
  convertTemperature,
  reverseCase,
  scorePalindrome,
} = require("../src/misc");

// In misc.js, create a countLetters function and export it.
// This function has two parameters:
// word - a string
// letter - a string, a single English letter to find in the word
// The function returns the number of times the letter appears in the word.
// Letters count, even if they do not match case.
// Test cases: (2 points each)
// ("hello", "h") → 1
// ("hello", "l") → 2
// ("suspicious", "s") → 3
// ("Apple", "P") → 2
// ("San Francisco", "s") → 2

describe("countLetters function", () => {
  test("hello and h return 1", () => {
    const result = countLetters("hello", "h");
    expect(result).toBe(1);
  });
  test("hello and l return 2", () => {
    const result = countLetters("hello", "l");
    expect(result).toBe(2);
  });
  test("suspicious and s return 2", () => {
    const result = countLetters("suspicious", "s");
    expect(result).toBe(3);
  });
  test("Apple and P return 2", () => {
    const result = countLetters("Apple", "P");
    expect(result).toBe(2);
  });
  test("San Francisco and s return 2", () => {
    const result = countLetters("San Francisco", "s");
    expect(result).toBe(2);
  });
});

// In misc.js, create a convertTemperature function and export it.
// This function has two parameters:
// fromTemp - a string including a number and a unit, e.g. "32F", "23C"
// toUnit - a string indicating the desired temperature unit, e.g. "F", "C"
// The function converts the fromTemp to the desired unit and returns the result as a number.
// Test cases: (2 points each)
// ("50F", "F") → 50
// ("28C", "C") → 28
// ("32F", "C") → 0
// ("20C", "F") → 68
// ("-15C", "F") → 5

describe("convertTemperature function", () => {
  test("50F and F returns 50", () => {
    const result = convertTemperature("50F", "F");
    expect(result).toBe(50);
  });
  test("28C and C return 28", () => {
    const result = convertTemperature("28C", "C");
    expect(result).toBe(28);
  });
  test("32F and C return 0", () => {
    const result = convertTemperature("32F", "C");
    expect(result).toBe(0);
  });
  test("20C and F return 68", () => {
    const result = convertTemperature("20C", "F");
    expect(result).toBe(68);
  });
  test("-15C and F return 5", () => {
    const result = convertTemperature("-15C", "F");
    expect(result).toBe(5);
  });
});

// In misc.js, create a reverseCase function and export it.
// This function has one parameter, a string.
// It returns a new string that has the same letters and characters, but the capitalization of every letter is reversed.
// Test Cases (1 point each)
// "a" → "A"
// "A" → "a"
// "HI" → "hi"
// "Car" → "cAR"
// "PoPuLAR" → "pOpUlar"
// "" → ""
// "123" → "123"
// "2:00pm" → "2:00PM"

describe("reverseCase function", () => {
  test("converts a to A", () => {
    const result = reverseCase("a");
    expect(result).toBe("A");
  });
  test("converts A to a", () => {
    const result = reverseCase("A");
    expect(result).toBe("a");
  });
  test("converts HI to hi", () => {
    const result = reverseCase("HI");
    expect(result).toBe("hi");
  });
  test("converts Car to cAR", () => {
    const result = reverseCase("Car");
    expect(result).toBe("cAR");
  });
  test("converts PoPuLAR to pOpUlar", () => {
    const result = reverseCase("PoPuLAR");
    expect(result).toBe("pOpUlar");
  });
  test("converts '' to '' ", () => {
    const result = reverseCase("");
    expect(result).toBe("");
  });
  test("converts 2:00pm to 2:00PM", () => {
    const result = reverseCase("2:00pm");
    expect(result).toBe("2:00PM");
  });
});

// In misc.js, create a scorePalindrome function and export it.
// This function has one parameter, a string.
// It calculates the palindrome score by counting the number of characters that are mirrored and returns the score.
// A character is mirrored if it's in the same position forwards and backwards. For example, if the first and last characters are the same, that's one point. If the second and the next-to-last characters are the same, that's a point.
// When a word has an odd number of letters, the middle letter does NOT count as a point.
// Test Cases: (1 point each)
// "" → 0
// "noon" → 2 (explanation: n and o are mirrored.)
// "socks" → 1 (explanation: s is mirrored.)
// "peoples" → 1 (explanation: e is mirrored)
// "java" → 0
// "pop" → 1 (explanation: the middle letter (o) by itself does not count)
// "a" → 0
// "abcdcxa" → 2
// "abcdeedcbx" → 4

describe("scorePalindrome function", () => {
  test("converts '' to 0", () => {
    const result = scorePalindrome("");
    expect(result).toBe(0);
  });
  test("converts noon to 2", () => {
    const result = scorePalindrome("noon");
    expect(result).toBe(2);
  });
  test("converts socks to 1", () => {
    const result = scorePalindrome("socks");
    expect(result).toBe(1);
  });
  test("converts peoples to 1", () => {
    const result = scorePalindrome("peoples");
    expect(result).toBe(1);
  });
  test("converts java to 0", () => {
    const result = scorePalindrome("java");
    expect(result).toBe(0);
  });
  test("converts pop to 1", () => {
    const result = scorePalindrome("pop");
    expect(result).toBe(1);
  });
  test("converts a to 0", () => {
    const result = scorePalindrome("a");
    expect(result).toBe(0);
  });
  test("converts abcdcxa to 2", () => {
    const result = scorePalindrome("abcdcxa");
    expect(result).toBe(2);
  });
  test("converts abcdeedcbx to 4", () => {
    const result = scorePalindrome("abcdeedcbx");
    expect(result).toBe(4);
  });
});
