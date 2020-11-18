import {Meetings} from '../../types/meetings';
import AsyncStorage from '@react-native-community/async-storage';

export const getAllMeetings = async () => {
  // await AsyncStorage.removeItem('meetings');
  const meetings = await AsyncStorage.getItem('meetings');
  if (meetings) {
    const objectMeetings = JSON.parse(meetings);
    return objectMeetings;
  }
  return null;
};

export const saveMeeting = async (meeting: Meetings) => {
  const meetings = await getAllMeetings();

  // const newMeeting: Meetings = {...meeting, id};

  if (meetings) {
    return await AsyncStorage.setItem(
      'meetings',
      JSON.stringify([meeting, ...meetings]),
    );
  } else {
    return await AsyncStorage.setItem('meetings', JSON.stringify([meeting]));
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
  if (meetings) {
    const objectMeetings: Meetings[] = JSON.parse(meetings);
    const newMeetings = objectMeetings.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });

    return await AsyncStorage.setItem('meetings', JSON.stringify(newMeetings));

    console.log('newMeetings', newMeetings);
  }
};
