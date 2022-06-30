import {
  ClientEvent,
  ClientEventListeners,
  ServerSocket,
} from "../../client/src/types/event.types";

export const addListeners = (socket: ServerSocket): void => {
  const listeners: ClientEventListeners = {};

  for (const event of Object.keys(listeners) as ClientEvent[]) {
    socket.on(event, listeners[event]);
  }
};
