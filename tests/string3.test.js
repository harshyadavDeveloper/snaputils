import { generatePassword, initials, pluralize } from "../src/string.js";

describe("generatePassword", () => {
  test("default length 12", () => expect(generatePassword().length).toBe(12));
  test("custom length 16", () => expect(generatePassword(16).length).toBe(16));
  test("is strong password", () => {
    const pwd = generatePassword();
    expect(pwd).toMatch(/[a-z]/);
    expect(pwd).toMatch(/[A-Z]/);
    expect(pwd).toMatch(/[0-9]/);
    expect(pwd).toMatch(/[@$!%*?&]/);
  });
});

describe("initials", () => {
  test("two words", () => expect(initials("Harsh Yadav")).toBe("HY"));
  test("three words", () => expect(initials("John Doe Smith")).toBe("JDS"));
  test("single word", () => expect(initials("John")).toBe("J"));
  test("empty string", () => expect(initials("")).toBe(""));
});

describe("pluralize", () => {
  test("singular", () => expect(pluralize("item", 1)).toBe("1 item"));
  test("plural", () => expect(pluralize("item", 2)).toBe("2 items"));
  test("custom plural", () =>
    expect(pluralize("person", 2, "people")).toBe("2 people"));
  test("zero", () => expect(pluralize("item", 0)).toBe("0 items"));
});
