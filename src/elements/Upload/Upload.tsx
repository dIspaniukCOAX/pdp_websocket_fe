import { Upload as AntdUpload } from "antd";

import { UploadComponent } from "./Upload.types";

export const Upload: UploadComponent = ({ children, ...rest }) => {
  return <AntdUpload {...rest}>{children}</AntdUpload>;
};

Upload.Dragger = AntdUpload.Dragger;
