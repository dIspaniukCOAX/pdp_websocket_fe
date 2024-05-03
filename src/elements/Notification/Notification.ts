import { notification as antdNotification } from "antd";
import i18next from "i18next";

import { TJointContent, TNotificationType } from "./Notification.types";

import styles from "./Notification.module.scss";

const DEFAULT_ERROR_MESSAGE = {
  uk: "Щось пішло не так",
  en: "Something went wrong"
};

export class Notification {
  constructor() {
    antdNotification.config({ duration: 3, placement: "top", maxCount: 3 });
  }

  private showNotification(type: TNotificationType, description?: TJointContent) {
    const language = i18next.language as "uk" | "en";

    return antdNotification[type]({
      message: description || DEFAULT_ERROR_MESSAGE[language],
      className: styles.notification
    });
  }

  info(description?: TJointContent) {
    return this.showNotification("info", description);
  }

  success(description?: TJointContent) {
    return this.showNotification("success", description);
  }

  error(description?: TJointContent) {
    return this.showNotification("error", description);
  }

  warning(description?: TJointContent) {
    return this.showNotification("warning", description);
  }

  open(description?: TJointContent) {
    return this.showNotification("open", description);
  }

  destroy() {
    return antdNotification.destroy();
  }
}

export const notification = new Notification();
