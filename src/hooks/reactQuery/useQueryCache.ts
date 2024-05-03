import { QueryCache } from "react-query";

export const useQueryCache = () => {
  return new QueryCache();
};
