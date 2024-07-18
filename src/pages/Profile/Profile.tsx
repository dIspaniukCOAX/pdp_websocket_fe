import React from "react";

import { BlockContent } from "@/components/BlockContent/BlockContent";
import { ProfileUserView } from "@/components/ProfileUserView/ProfileUserView";

import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={styles.container}>
      <BlockContent title="Profile" content={<ProfileUserView />} />
    </div>
  );
};
