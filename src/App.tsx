import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

import CountProvider from './context/Count';

const App: React.FC = () => {
  return (
    <CountProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </CountProvider>
  );
};

export default App;
