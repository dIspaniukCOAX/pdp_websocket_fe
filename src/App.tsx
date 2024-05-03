import { FC } from "react";

import { withProviders } from "@/providers";

import { AppRouter } from "@/pages";

import styles from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={styles.App} data-testid="react-root-component">
      <AppRouter />
    </div>
  );
};

export default withProviders(App);
