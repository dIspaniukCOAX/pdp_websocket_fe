import { io, Socket } from "socket.io-client";

import { ClientToServerEvents, ServerToClientEvents } from "@/types";

const SOCKET_URL = process.env.REACT_APP_WEBSOCKET_URL as string; // Replace with your backend URL

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(SOCKET_URL, {
  autoConnect: false,
});