import MockAdapter from "axios-mock-adapter";

import { api } from "@/helpers";

const mock = new MockAdapter(api.axiosInstance);

describe("api", () => {
  beforeEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it("should make a GET request", async () => {
    mock.onGet("/test").reply(200, "response");

    const response = await api.get("/test");

    expect(response).toBe("response");
  });

  it("should make a POST request", async () => {
    mock.onPost("/test").reply(200, "response");

    const response = await api.post("/test", { data: "data" });

    expect(response).toBe("response");
  });

  it("should make a PUT request", async () => {
    mock.onPut("/test").reply(200, "response");

    const response = await api.put("/test", { data: "data" });

    expect(response).toBe("response");
  });

  it("should make a PATCH request", async () => {
    mock.onPatch("/test").reply(200, "response");

    const response = await api.patch("/test", { data: "data" });

    expect(response).toBe("response");
  });

  it("should make a DELETE request", async () => {
    mock.onDelete("/test").reply(200, "response");

    const response = await api.del("/test");

    expect(response).toBe("response");
  });

});
