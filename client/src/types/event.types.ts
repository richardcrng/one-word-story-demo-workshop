import { Socket as TClientSocket } from "socket.io-client";
import { Socket as TServerSocket, Server as TServer } from "socket.io";

export type ClientSocket = TClientSocket<
  ServerEventListeners,
  ClientEventListeners
>;

export type ServerSocket = TServerSocket<
  ClientEventListeners,
  ServerEventListeners
>;

export type ServerIO = TServer<ClientEventListeners, ServerEventListeners>;

export type ClientEvent = keyof ClientEventListeners

export type ServerEvent = keyof ServerEventListeners

/**
 * Listeners for `ClientEvent`s
 */
export type ClientEventListeners = {
}

/**
 * Listeners for `ServerEvent`s
 */
export type ServerEventListeners = {
  
}
