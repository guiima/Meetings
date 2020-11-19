import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

LogBox.ignoreLogs(['componentWillReceiveProps']);

import {MessageContext, TypeMessage} from './context/Notification';

const App: React.FC = () => {
  const [message, setMessage] = React.useState(TypeMessage.sucess);

  return (
    <MessageContext.Provider value={{message, setMessage}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </MessageContext.Provider>
  );
};

export default App;
