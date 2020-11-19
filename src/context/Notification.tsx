import React, {createContext, useContext} from 'react';

export enum TypeNotification {
  sucess = 'sucess',
  error = 'error',
}

export type NotificationContextType = {
  typeMessage: TypeNotification;
  message: string;
  showNotification: boolean;
  setMessage: (message: string) => void;
  setShowNotification: (value: boolean) => void;
  setTypeMessage: (message: TypeNotification) => void;
};

export const MessageContext = createContext<NotificationContextType>({
  message: '',
  setMessage: (message) => {},
  showNotification: false,
  setShowNotification: () => {},
  typeMessage: TypeNotification.sucess,
  setTypeMessage: () => {},
});

export const useMessage = () => useContext(MessageContext);
