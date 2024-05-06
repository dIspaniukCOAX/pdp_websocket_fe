import React, { useMemo, useState } from "react";
import { Button, Select } from "antd";

import { IBike } from "@/types/bike/bike.type";

import styles from "./ModalBikeRent.module.scss";

import { TimeHourSelect } from "./ModalBikeRent.helper";

export const ModalBikeRent = ({ bikeData }: { bikeData: IBike }) => {
  const [selected, setSelectedValue] = useState<number>(1);

  const amountValue = useMemo(() => {
    return bikeData.rentalPricePerHour * selected;
  }, [bikeData, selected]);

  return (
    <div className={styles.container}>
      <Select onChange={setSelectedValue} className={styles.select} options={TimeHourSelect} />
      <div className={styles.amount}>
        <span>Amount: </span>
        <span>{amountValue}</span>₴
      </div>
      <Button type="primary" className={styles.button}>
        Rent Bike
      </Button>
    </div>
  );
};
