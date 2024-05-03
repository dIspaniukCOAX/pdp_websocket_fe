import { FC } from "react";
import { Upload, UploadProps } from "antd";

export interface UploadComponent extends FC<UploadProps> {
  Dragger: typeof Upload.Dragger;
}
