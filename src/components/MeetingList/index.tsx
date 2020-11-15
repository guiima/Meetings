import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {Text} from 'react-native';
import Button from '../../shared/components/Button';

import {Container} from './styles';

interface MeetingListProps {
  navigation: NavigationContainerRef;
}

const MeetingList: React.FC<MeetingListProps> = ({navigation}) => {
  return (
    <Container>
      <Button
        size={100}
        title="NOVO"
        type="primary"
        action={() => navigation.navigate('MeetingForm')}
      />
      <Text>list</Text>
    </Container>
  );
};

export default MeetingList;
