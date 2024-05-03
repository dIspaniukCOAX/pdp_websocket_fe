import { UploadFile } from "antd";

import { notification } from "@/elements";

const parseFileSizeRanges = (range?: string): number[] => {
  return range?.split("..").map(Number) || [500, 5242880];
};

export const checkFileSize = (file: UploadFile, range?: string) => {
  const [minSize, maxSize] = parseFileSizeRanges(range);
  const { size = 0 } = file;

  if (size < minSize) {
    const msg = `You can't upload files less than ${minSize} bytes!`;

    notification.error(msg);

    throw new Error(msg);
  }

  if (size > maxSize) {
    const msg = `You can't upload files bigger than ${maxSize} bytes!`;

    notification.error(msg);

    throw new Error(msg);
  }
};
