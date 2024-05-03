import Compressor from "compressorjs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const compressImage = (file: any, maxSize?: number) => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.8,
      ...(maxSize ? { maxWidth: maxSize, maxHeight: maxSize } : {}),
      minWidth: 100,
      minHeight: 100,
      resize: "contain",
      success(result) {
        resolve(result);
      },
      error(err) {
        console.error(err);

        reject(new Error("An error occurred while compressing this file"));
      }
    });
  });
};
