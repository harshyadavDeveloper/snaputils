import {
  slugify,
  stripHTML,
  extractEmails,
  extractURLs,
} from "../src/string.js";

describe("slugify", () => {
  test("basic slug", () => expect(slugify("Hello World")).toBe("hello-world"));
  test("removes special chars", () =>
    expect(slugify("Hello World!")).toBe("hello-world"));
  test("trims spaces", () => expect(slugify("  My Post  ")).toBe("my-post"));
  test("empty string", () => expect(slugify("")).toBe(""));
});

describe("stripHTML", () => {
  test("strips tags", () => expect(stripHTML("<p>Hello</p>")).toBe("Hello"));
  test("strips nested tags", () =>
    expect(stripHTML("<p>Hello <b>World</b></p>")).toBe("Hello World"));
  test("no tags", () => expect(stripHTML("No tags")).toBe("No tags"));
});

describe("extractEmails", () => {
  test("extracts emails", () =>
    expect(extractEmails("a@b.com and c@d.com")).toEqual([
      "a@b.com",
      "c@d.com",
    ]));
  test("no emails", () => expect(extractEmails("no emails here")).toEqual([]));
});

describe("extractURLs", () => {
  test("extracts URLs", () =>
    expect(extractURLs("visit https://google.com")).toEqual([
      "https://google.com",
    ]));
  test("no URLs", () => expect(extractURLs("no urls here")).toEqual([]));
});
