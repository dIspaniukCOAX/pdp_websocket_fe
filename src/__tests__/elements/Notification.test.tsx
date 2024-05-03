import { notification as antdNotification } from "antd";

import { Notification } from "@/elements";

jest.mock("antd", () => ({
  Upload: {
    Dragger: () => <div>Mock Dragger</div>
  },
  notification: {
    config: jest.fn(),
    info: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn(),
    open: jest.fn(),
    destroy: jest.fn()
  }
}));

describe("Notification class", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call antdNotification.info when calling Notification.info", () => {
    const notificationInstance = new Notification();
    const description = "Test Info Notification";

    notificationInstance.info(description);

    expect(antdNotification.info).toHaveBeenCalledWith({
      message: description,
      className: expect.any(String)
    });
  });

  test("should call antdNotification.destroy when calling Notification.destroy", () => {
    const notificationInstance = new Notification();

    notificationInstance.destroy();

    expect(antdNotification.destroy).toHaveBeenCalled();
  });
});
