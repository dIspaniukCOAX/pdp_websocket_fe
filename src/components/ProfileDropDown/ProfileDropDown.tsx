import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "antd";

import { queryClient } from "@/providers";

import { DropDown, Icon } from "@/elements";

import { useCurrentUser } from "@/react-queries";

import { removeJWTToken } from "@/helpers";

import { ROUTES } from "@/constants";
import { MAX_MOBILE_WIDTH } from "@/constants/global";

import { IUser } from "@/types";

import styles from "./ProfileDropDown.module.scss";

import { setUserInformation } from "@/store/user/user.slice";

const { AUTH, SIGN_IN } = ROUTES;

export const ProfileDropDown: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isMobileSize = window.innerWidth < MAX_MOBILE_WIDTH;

  const { data: userData, isLoading } = useCurrentUser<IUser, IUser>();

  const logout = () => {
    removeJWTToken();
    queryClient.clear();
    navigate(`${AUTH}${SIGN_IN}`);
  };

  useEffect(() => {
    if (userData) {
      dispatch(setUserInformation(userData));
    }
  }, [userData]);

  const renderItem = (icon: string, label: string) => (
    <div className={styles["dropdown-item"]}>
      <Icon icon={icon} />
      <Link className={styles.link} to="#">
        {label}
      </Link>
    </div>
  );

  if (isLoading) {
    return null;
  }

  if (isMobileSize && userData?.hotel) {
    return (
      <Avatar
        className={styles.avatar}
        size="small"
      />
    );
  }

  return (
    <DropDown
      menu={{
        items: [
          {
            key: 1,
            onClick: () => navigate("/profile"),
            label: renderItem("users", t("layout-pages.profile"))
          },
          { key: 2, onClick: logout, label: renderItem("exit", t("layout-pages.exit")) }
        ]
      }}
      trigger={["click"]}
    >
      {userData?.fullName}
    </DropDown>
  );
};
