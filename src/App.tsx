import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import NotificationCard from './shared/NotificationCard';

LogBox.ignoreLogs(['componentWillReceiveProps']);

import {MessageContext, TypeNotification} from './context/Notification';

const App: React.FC = () => {
  const [message, setMessage] = React.useState('');
  const [showNotification, setShowNotification] = React.useState(false);
  const [typeMessage, setTypeMessage] = React.useState(TypeNotification.sucess);

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
        showNotification,
        setShowNotification,
        typeMessage,
        setTypeMessage,
      }}
    >
      <NavigationContainer>
        <Routes />
        <NotificationCard />
      </NavigationContainer>
    </MessageContext.Provider>
  );
};

export default App;
