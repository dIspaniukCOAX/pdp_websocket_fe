import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Select } from "antd";
import dayjs from "dayjs";

import { notification } from "@/elements";

import { useCreateTransaction } from "@/react-queries/transaction/useCreateTransaction";

import styles from "./ModalBikeRent.module.scss";

import { TimeHourSelect } from "./ModalBikeRent.helper";

import { RootState } from "@/store";
import { setActiveBike } from "@/store/payment/payment.slice";

export const ModalBikeRent = ({ onCancel }: { onCancel: () => void }) => {
  const [selected, setSelectedValue] = useState<number>(1);
  const user = useSelector((state: RootState) => state.user.main);
  const bikeData = useSelector((state: RootState) => state.payment.activeBike);

  const dispatch = useDispatch();

  const { mutate, isLoading } = useCreateTransaction({
    onSuccess: () => {
      notification.success("Ви успішно орендували велосипед");
      dispatch(setActiveBike(null));
      onCancel()
    }
  });

  const amountValue = useMemo(() => {
    if (bikeData) {
      return bikeData?.rentalPricePerHour * selected;
    }
    
return 0
  }, [bikeData, selected, user]);

  const error = useMemo(() => {
    if (!user?.balance || user?.balance / 100 < amountValue) {
      return "На вашому рахунку недостатньо коштів для оренди велосипеда";
    }
  }, [user, amountValue]);

  const handlePayment = () => {
    if (user && bikeData) {
      const expiresIn = dayjs().toISOString();
      const expiresOut = dayjs().add(selected, "hour").toISOString();
      mutate({
        userId: user.id,
        bikeId: bikeData?.id,
        amount: amountValue * 100,
        expiresIn,
        expiresOut
      });
    }
  };

  return (
    <div className={styles.container}>
      <p>Оберіть кількість годин для поїздки:</p>
      <Select
        defaultValue={1}
        onChange={setSelectedValue}
        className={styles.select}
        options={TimeHourSelect}
      />
      <div className={styles.amount}>
        <span>Amount: </span>
        <span>{amountValue}</span>₴
      </div>
      <div className={styles.error}>{error}</div>
      <Button
        onClick={handlePayment}
        loading={isLoading}
        disabled={!!error}
        type="primary"
        className={styles.button}
      >
        Rent Bike
      </Button>
    </div>
  );
};
