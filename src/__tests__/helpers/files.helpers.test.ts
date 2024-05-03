import { UploadFile } from "antd";

import { notification } from "@/elements";

import { checkFileSize, checkFileType } from "@/helpers";

jest.mock("@/elements", () => ({
  notification: {
    error: jest.fn()
  }
}));

describe("checkFileSize", () => {
  const mockFile = (size: number): UploadFile => ({
    uid: "1",
    size,
    name: "test",
    status: "done"
  });

  it("should throw an error if file size is less than minSize", () => {
    const file = mockFile(400);

    expect(() => checkFileSize(file, "500..1000")).toThrowError(
      "You can't upload files less than 500 bytes!"
    );

    expect(notification.error).toHaveBeenCalledWith("You can't upload files less than 500 bytes!");
  });

  it("should throw an error if file size is more than maxSize", () => {
    const file = mockFile(1500);

    expect(() => checkFileSize(file, "500..1000")).toThrowError(
      "You can't upload files bigger than 1000 bytes!"
    );

    expect(notification.error).toHaveBeenCalledWith(
      "You can't upload files bigger than 1000 bytes!"
    );
  });

  it("should not throw an error if file size is within the range", () => {
    const file = mockFile(750);

    expect(() => checkFileSize(file, "500..1000")).not.toThrow();
  });
});

describe("checkFileType", () => {
  const mockFile = (type: string): UploadFile => ({
    uid: "1",
    name: "test",
    status: "done",
    type
  });

  it("should throw an error if file type is not in the allowed formats", () => {
    const file = mockFile("image/jpeg");

    expect(() => checkFileType(file, ["image/png"])).toThrowError("You can only upload PNG file!");

    expect(notification.error).toHaveBeenCalledWith("You can only upload PNG file!");
  });

  it("should not throw an error if file type is in the allowed formats", () => {
    const file = mockFile("image/png");

    expect(() => checkFileType(file, ["image/png"])).not.toThrow();
  });
});
