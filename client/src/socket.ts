import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ClientSocket } from "./types/event.types";

const serverUrl = process.env.REACT_APP_SERVER_URL ?? `http://localhost:${process.env.REACT_APP_SERVER_PORT ?? 4000}`;

export const socketUrl =
  process.env.NODE_ENV === "production"
    ? "https://your-production-url.herokuapp.com"
    : serverUrl;

export const socket: ClientSocket = io(socketUrl);

export const SocketContext = createContext(socket);

export function useSocket(): ClientSocket {
  const [hasConnected, setHasConnected] = useState(false);
  const socket = useContext(SocketContext);

  // rerender when connected, to allow access to id
  useEffect(() => {
    !hasConnected &&
      socket.on("connect", () => {
        setHasConnected(true);
      });
  });

  return socket;
}
