import React from "react";
import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/lib";

import { FormItem } from "@/elements";

import { IChatMessageForm } from "@/types";

import styles from "./ChatInput.module.scss";

const { TextArea } = Input;

export const ChatInput = ({
  form,
  handleSubmit
}: {
  form: FormInstance<IChatMessageForm>,
  handleSubmit: (value: IChatMessageForm) => void
}) => {


  return (
    <div className={styles["chat-input__container"]}>
      <Form onFinish={handleSubmit} className={styles["chat-input__form"]} form={form}>
        <FormItem className={styles["chat-input__textarea-field"]} name="messageField">
          <TextArea autoSize className={styles["chat-input__textarea"]} />
        </FormItem>
        <Button onClick={form.submit} className={styles["chat-input__button"]} type="primary">
          Send
        </Button>
      </Form>
    </div>
  );
};
