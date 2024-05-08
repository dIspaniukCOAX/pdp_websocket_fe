import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Form } from "antd";

import { FormItem, Icon, Input } from "@/elements";

import { usePaymentSend } from "@/react-queries/payment/usePaymentCreate";

import { useYupSync } from "@/hooks";

import { checkInSchema } from "./CheckoutForm.schema";

import { IPayment } from "@/types/payment/payment.type";

import styles from "./CheckoutForm.module.scss";

import { RootState } from "@/store";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      padding: "10px 12px",
      iconColor: "#0d121c",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#0d121c" },
      "::placeholder": { color: "#0d121c" }
    },
    invalid: {
      iconColor: "#f83d28",
      color: "#f83d28"
    }
  }
};

export default function PaymentForm() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const yupSync = useYupSync(checkInSchema);
  const userId = useSelector((state: RootState) => state.user.main?.id)

  const stripe = useStripe();
  const elements = useElements();

  const { mutate: handlePayment } = usePaymentSend({
    onSuccess: () => {
      window.location.reload();
    }
  });

  const handleSubmit = async (values: IPayment) => {
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      // Handle the case where the card element doesn't exist
      return;
    }

    await stripe.createPaymentMethod({
      type: "card",
      card: cardElement
    }).then((paymentMethod) => {
      handlePayment({
        userId: userId as number,
        amount: values.amount * 100,
        paymentMethod
      });
    });
  };

  return (
    <>
      <Form form={form} onFinish={handleSubmit}>
        <FormItem rules={[yupSync]} required name="amount">
          <Input
            prefix={(<Icon icon="bankNote" />) as unknown as string}
            type="number"
            min={1}
            suffix={t("fiat")}
          />
        </FormItem>
        <div className={styles.payment}>
          <CardElement options={{ ...CARD_OPTIONS, iconStyle: "solid" }} />
        </div>
        <Button className={styles.button} type="primary" onClick={form.submit}>
          Pay
        </Button>
      </Form>
    </>
  );
}
