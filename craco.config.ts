import path from "path";

const config = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "@/(.*)$": "<rootDir>/src/$1",
        "^@/src/elements/(.*)": "<rootDir>/src/elements/$1",
        "\\.(css|less)$": "<rootDir>/src/__tests__/__mocks__/styleMock.js"
      },
      testMatch: ["<rootDir>/src/__tests__/**/*.test.{js,jsx,ts,tsx}"],
      testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/src/__tests__/utils/",
        "<rootDir>/src/__tests__/__mocks__/",
        "^.+\\.module\\.(css|sass|scss)$",
      ]
    }
  },
  devServer: {
    port: 4200
  }
};

export default config;
