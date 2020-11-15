import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../components/Welcome';
import MeetingList from '../components/MeetingList';
import MeetingForm from '../components/MeetingForm';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{headerShown: true}}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="MeetingList" component={MeetingList} />
    <Stack.Screen name="MeetingForm" component={MeetingForm} />
  </Stack.Navigator>
);

export default Routes;
