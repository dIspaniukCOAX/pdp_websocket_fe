import React from "react";

import { useGetProfiles } from "@/react-queries/user/useGetProfiles";

import { IUser } from "@/types";

import styles from "./ListOfUsers.module.scss";

import { UserItem } from "../UserItem/UserItem";

export const ListOfUsers = () => {
  const { data: profiles } = useGetProfiles();

  return (
    <div className={styles["list-of-users__container"]}>
      {profiles?.map((profile: IUser, index) => {
        return <UserItem key={index} user={profile} />;
      })}
    </div>
  );
};
