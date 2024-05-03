// constants
import { UploadFile } from "antd";

// components
import { notification } from "@/elements";

export const checkFileType = (file: UploadFile, formats?: string[]) => {
  const formatForUI = () => {
    return formats?.map((f) => f.split("/")[1].toUpperCase()).join("/") || "";
  };

  const { type = "" } = file;

  if (!formats?.includes(type)) {
    const msg = `You can only upload ${formatForUI()} file!`;

    notification.error(msg);

    throw new Error(msg);
  }
};
