import React, {useEffect} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {Text, ScrollView} from 'react-native';
import Button from '../../shared/components/Button';
import {getAllMeetings} from '../../services/meetings';
import {Meetings} from '../../types/meetings';

import {useState} from 'react';
import {Container, Top, ContentMeeting, Title, Info, Collabs} from './styles';

interface MeetingListProps {
  navigation: NavigationContainerRef;
}

const MeetingList: React.FC<MeetingListProps> = ({navigation}) => {
  const [meetings, setMeetings] = useState<Meetings[]>([]);

  const getMeetings = () => {
    getAllMeetings()
      .then((response) => {
        setMeetings(response);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const formatHours = (hour: Date) => {
    const newHour = new Date(hour);
    const time = newHour.toISOString().split('T');
    const timeFormated = time[1].split('.');
    return timeFormated[0];
  };

  const formatDate = (date: Date) => {
    const newDate = new Date(date);
    const dateFormated = newDate.toISOString().split('T');
    return dateFormated[0];
  };

  useEffect(() => {
    getMeetings();
  }, [meetings]);

  return (
    <Container>
      <Top>
        <Button
          size={100}
          title="NOVO"
          type="primary"
          action={() => navigation.navigate('MeetingForm')}
        />
      </Top>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {meetings.map((item) => {
          return (
            <ContentMeeting key={item.id}>
              <Title>{item.title}</Title>
              <Info>Data: {formatDate(item.date)}</Info>
              <Info>
                Horário: {formatHours(item.startAt)} - {formatHours(item.endAt)}
              </Info>
              <Collabs>
                <Info>Colaboradores: </Info>
                {item.collaborators.map((collaborator, index) => {
                  return (
                    <Info key={index}>
                      {collaborator.value}
                      {item.collaborators.length === index + 1 ? '' : ','}
                    </Info>
                  );
                })}
              </Collabs>
            </ContentMeeting>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default MeetingList;
