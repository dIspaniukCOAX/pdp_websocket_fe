import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Marker } from "@googlemaps/markerclusterer";
import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import { Button, Modal } from "antd";

import { Icon } from "@/elements";

import useOutsideClickDetect from "@/hooks/block/useOutsideClickDetect";

import { IBike } from "@/types/bike/bike.type";

import ElectricBike from "@/assets/images/electric-bike.png";

import styles from "./AdvancedMarker.module.scss";

import { ModalBikeRent } from "../ModalBikeRent/ModalBikeRent";

import { RootState } from "@/store";
import { setActiveBike, setHandleShowModal } from "@/store/payment/payment.slice";

export const CustomAdvancedMarker = ({
  bike,
  setMarkerRef,
  handleActiveMarker,
  activeMarker
}: {
  bike: IBike;
  activeMarker: number | null;
  setMarkerRef: (marker: Marker | null, key: string) => void;
  handleActiveMarker: (key: number | null) => void;
}) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const isShowModal = useSelector((state: RootState) => state.payment.isShowModal);

  const handleToggleModal = () => {
    dispatch(setActiveBike(bike))
    dispatch(setHandleShowModal(!isShowModal));
  };

  useOutsideClickDetect({
    ref,
    callback: () => handleActiveMarker(null)
  });

  return (
    <>
      <AdvancedMarker
        ref={(marker) => setMarkerRef(marker, String(bike.id))}
        key={bike.id}
        position={{ lat: bike.latitude, lng: bike.longitude }}
        onClick={() => handleActiveMarker(bike.id)}
      >
        <div className={styles.icon}>
          <Icon icon="bike" />
        </div>
      </AdvancedMarker>

      {activeMarker && activeMarker === bike.id && (
        <InfoWindow
          position={{ lat: bike.latitude, lng: bike.longitude }}
          onCloseClick={() => handleActiveMarker(null)}
        >
          <div ref={ref} className={styles.info}>
            <img className={styles.image} src={ElectricBike} alt="Electric bike" />
            <p>Model: {bike.model}</p>
            <p>Price per hour: {bike.rentalPricePerHour} ₴</p>
            <Button disabled={!bike.available} onClick={handleToggleModal} type="primary" className={styles.button}>
              Rent bike
            </Button>
          </div>
        </InfoWindow>
      )}
      {isShowModal && (
        <Modal footer={null} centered open={isShowModal} onCancel={handleToggleModal}>
          <ModalBikeRent onCancel={handleToggleModal} />
        </Modal>
      )}
    </>
  );
};
