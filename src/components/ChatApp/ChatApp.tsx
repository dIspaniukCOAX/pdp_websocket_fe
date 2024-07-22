import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Form } from "antd";

import { socket } from "@/helpers";

import { IChatMessage, IChatMessageForm } from "@/types";

import styles from "./ChatApp.module.scss";

import { ChatDialog } from "../ChatDialog/ChatDialog";
import { ChatHeader } from "../ChatHeader/ChatHeader";
import { ChatInput } from "../ChatInput/ChatInput";
import { EmptyChatDialog } from "../EmptyChatDialog/EmptyChatDialog";

import { RootState } from "@/store";

export const ChatApp = () => {
  const [form] = Form.useForm<IChatMessageForm>();
  const activeChatWithUser = useSelector((state: RootState) => state.chat.activeUser);
  const [messages, setMessages] = React.useState<IChatMessage[]>([]);
  const activeUserId = useSelector((state: RootState) => state.user.main?.id);

  useEffect(() => {
    if (activeChatWithUser && activeUserId) {
      socket.connect();
      const handleMessage = (data: string) => {
        console.log("data :>> ", data);
        const message: IChatMessage = JSON.parse(data);
        setMessages((prevMessages) => [...prevMessages, message]);
      };

      socket.emit("joinRoom", { senderId: activeUserId, receiverId: activeChatWithUser.id });

      socket.on("message", handleMessage);

      return () => {
        socket.off("message", handleMessage);
        socket.disconnect();
      };
    }
  }, [activeChatWithUser]);

  const handleSubmit = (value: IChatMessageForm) => {
    console.log("value :>> ", value, activeUserId, activeChatWithUser?.id);
    socket.emit(
      "message",
      JSON.stringify({
        senderId: activeUserId,
        receiverId: activeChatWithUser?.id,
        content: value.messageField
      })
    );
    form.resetFields();
  };

  if (!activeChatWithUser) {
    return <EmptyChatDialog />;
  }

  return (
    <div className={styles.chat__container}>
      <ChatHeader />
      <ChatDialog messages={messages} />
      <ChatInput form={form} handleSubmit={handleSubmit} />
    </div>
  );
};
