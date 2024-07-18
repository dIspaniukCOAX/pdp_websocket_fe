
export interface IChatMessage {
    senderId: string;
    receiverId: string;
    content: string;
}

export interface IChatMessageForm {
    messageField: string;
}

export interface ServerToClientEvents {
    message: (data: string) => void;
    joinRoom: (data: { userId: number; friendId: number }) => void;
  }
  
  export interface ClientToServerEvents {
    message: (data: string) => void;
    joinRoom: (data: { userId: number; friendId: number }) => void;
  }