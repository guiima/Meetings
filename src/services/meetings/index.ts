import {Meetings} from '../../types/meetings';
import AsyncStorage from '@react-native-community/async-storage';

export const saveMeeting = async (meeting: Meetings) => {
  // add id
  // add date inicio correta e date final
  await AsyncStorage.setItem('meetings', JSON.stringify(meeting));
};

export const getMeeting = async (id: number) => {
  // get item e remove o item com id correto
  const meetings = await AsyncStorage.getItem('meetings');
};

export const updateMeeting = async (id: number) => {
  // get item e remove o item com id correto
  const meetings = await AsyncStorage.getItem('meetings');
};

export const deleteMeeting = async (id: number) => {
  // get item e remove o item com id correto
  const meetings = await AsyncStorage.getItem('meetings');
};
