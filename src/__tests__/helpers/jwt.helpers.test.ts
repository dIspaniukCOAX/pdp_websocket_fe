import { getJWTToken, removeJWTToken, setJWTToken } from "@/helpers";

describe("JWT helpers", () => {
  beforeEach(() => {
    removeJWTToken();
  });

  it("should set and get a JWT token", () => {
    setJWTToken("testToken");

    expect(getJWTToken()).toBe("testToken");
  });

  it("should remove a JWT token", () => {
    setJWTToken("testToken");
    removeJWTToken();

    expect(getJWTToken()).toBeNull();
  });
});
