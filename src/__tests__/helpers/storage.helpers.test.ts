import { localStorageService } from "@/helpers";

import { LOCAL_STORAGE_KEYS } from "@/constants";

const { JWT_TOKEN } = LOCAL_STORAGE_KEYS;

const { setItem, getItem, removeItem, clearStorage } = localStorageService<string>(JWT_TOKEN);

describe("localStorageService", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("should set and get an item", () => {
    setItem("test");

    expect(getItem()).toBe("test");
  });

  it("should remove an item", () => {
    setItem("test");
    removeItem();

    expect(getItem()).toBeNull();
  });

  it("should overwrite an existing item", () => {
    setItem("test");
    setItem("newTest");

    expect(getItem()).toBe("newTest");
  });

  it("should remove an item when setting it to undefined", () => {
    setItem("test");
    setItem();

    expect(getItem()).toBeNull();
  });
});
