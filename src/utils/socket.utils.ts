import { socketIO } from "../index";


export const emitSocketEvent = (eventName: string, data: any) => {
  socketIO.emit(eventName, data);
}




