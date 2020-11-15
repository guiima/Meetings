import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../components/Welcome';
import MeetingList from '../components/MeetingList';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{headerShown: true}}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="MeetingList" component={MeetingList} />
  </Stack.Navigator>
);

export default Routes;
