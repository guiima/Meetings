import React, {createContext, useContext} from 'react';

export enum TypeMessage {
  sucess = 'sucess',
  error = 'error',
}

export type MessageContextType = {
  message: TypeMessage;
  setMessage: (Theme: TypeMessage) => void;
};

export const MessageContext = createContext<MessageContextType>({
  message: TypeMessage.sucess,
  setMessage: (message) => console.warn('no theme provider'),
});

export const useMessage = () => useContext(MessageContext);
