import { capitalizeFirstLetter } from "@/helpers";

describe("capitalizeFirstLetter", () => {
  test("should capitalize first letter of a string", () => {
    expect(capitalizeFirstLetter("john")).toBe("John");
  });
  test("should not capitalize first letter of a string if it is already capitalized", () => {
    expect(capitalizeFirstLetter("John")).toBe("John");
  });
});
