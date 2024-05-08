import React from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import dayjs from "dayjs";

import { BlockContent } from "@/components/BlockContent/BlockContent";

import { Loader } from "@/elements";

import { useGetUserTransactionActive } from "@/react-queries/transaction/useGetUserTransaction";
import { useUpdateTransaction } from "@/react-queries/transaction/useUpdateTransaction";

import styles from "./ActiveRent.module.scss";

import { RootState } from "@/store";

export const ActiveRent = () => {
  const user = useSelector((state: RootState) => state.user.main);
  const { data: transactionData, isLoading } = useGetUserTransactionActive(user?.id || 0, {
    enabled: !!user?.id
  });

  const { mutate: updateTransaction, isLoading: isUpdating } = useUpdateTransaction();

  const handleCancelBooking = () => {
    if (transactionData?.length) {
      updateTransaction({
        id: transactionData[0]?.id,
        expiresIn: transactionData[0]?.expiresIn,
        expiresOut: dayjs().toISOString()
      });
    }
  };

  if (isLoading) {
    return <Loader isFullScreen />;
  }

  return (
    <div className={styles.wrapper}>
      <BlockContent
        title="Активна оренда"
        content={
          <div className={styles.container}>
            <h1>Ви маєте активний велосипед</h1>
            <p>
              Час початку:{" "}
              {transactionData?.length &&
                dayjs(transactionData[0]?.expiresIn).format("DD/MM/YYYY HH:mm")}
            </p>
            <p>
              Час закінчення:{" "}
              {transactionData?.length &&
                dayjs(transactionData[0]?.expiresOut).format("DD/MM/YYYY HH:mm")}
            </p>
            <Button onClick={handleCancelBooking} loading={isUpdating} type="primary">
              Закінчити поїздку
            </Button>
          </div>
        }
      />
    </div>
  );
};
