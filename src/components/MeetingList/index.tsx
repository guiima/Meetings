import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {Platform, Text} from 'react-native';
import Button from '../../shared/components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Container} from './styles';
import {useState} from 'react';

interface MeetingListProps {
  navigation: NavigationContainerRef;
}

const MeetingList: React.FC<MeetingListProps> = ({navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <Container>
      <Button
        size={100}
        title="NOVO"
        type="primary"
        action={() => navigation.navigate('MeetingForm')}
      />
      <Text>list</Text>
      {/* <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="time"
        // is24Hour={true}
        display="default"
        onChange={onChange}
      /> */}
    </Container>
  );
};

export default MeetingList;
