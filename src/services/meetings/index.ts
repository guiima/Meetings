import {Meetings} from '../../types/meetings';
import AsyncStorage from '@react-native-community/async-storage';

const generateId = () => {
  const id = new Date().getTime();
  return id;
};

export const getAllMeeting = async () => {
  // await AsyncStorage.removeItem('meetings');
  const meetings = await AsyncStorage.getItem('meetings');
  if (meetings) {
    const objectMeetings = JSON.parse(meetings);
    return objectMeetings;
  }
  return null;
};

export const saveMeeting = async (meeting: Meetings) => {
  const id = generateId();
  const meetings = await getAllMeeting();

  const newMeeting: Meetings = {...meeting, id};

  if (meetings) {
    return await AsyncStorage.setItem(
      'meetings',
      JSON.stringify([newMeeting, ...meetings]),
    );
  } else {
    return await AsyncStorage.setItem('meetings', JSON.stringify([newMeeting]));
  }

  // const meetings = await AsyncStorage.removeItem('meetings');
};

export const updateMeeting = async (id: number) => {
  // get item e remove o item com id correto
  const meetings = await AsyncStorage.getItem('meetings');
};

export const deleteMeeting = async (id: number) => {
  // get item e remove o item com id correto
  const meetings = await AsyncStorage.getItem('meetings');
};
