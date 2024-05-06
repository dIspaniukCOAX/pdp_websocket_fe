import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { BlockContent } from "@/components/BlockContent/BlockContent";
import { Payment } from "@/components/Payment/Payment";
import { ProfileUserView } from "@/components/ProfileUserView/ProfileUserView";

import { ROUTES } from "@/constants";

import styles from "./Profile.module.scss";

const { DASHBOARD } = ROUTES;

export const Profile = () => {
  const navigate = useNavigate();

  const handleNavigateToMap = () => {
    navigate(DASHBOARD);
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>
        <Button onClick={handleNavigateToMap} ghost className={styles.header__button}>
          Back to Map
        </Button>
      </p>
      <BlockContent title="Profile" content={<ProfileUserView />} />
      <BlockContent title="Profile" content={<Payment />} />
    </div>
  );
};
