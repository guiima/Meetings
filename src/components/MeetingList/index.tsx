import React, {useEffect, useState} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import Button from '../../shared/components/Button';
import {getAllMeetings} from '../../services/meetings';
import {Meetings} from '../../types/meetings';
import Icon from 'react-native-vector-icons/FontAwesome';
import {deleteMeeting} from '../../services/meetings';
import {useMessage, TypeNotification} from '../../context/Notification';

import {
  Container,
  Top,
  ContentMeeting,
  Title,
  Info,
  Collabs,
  DeleteItemButton,
  SelectItemButton,
  HeaderCard,
} from './styles';

interface MeetingListProps {
  navigation: NavigationContainerRef;
}

const MeetingList: React.FC<MeetingListProps> = ({navigation}) => {
  const [meetings, setMeetings] = useState<Meetings[]>([]);
  const {setMessage, setShowNotification, setTypeMessage} = useMessage();

  const getMeetings = () => {
    getAllMeetings()
      .then((response) => {
        setMeetings(response);
      })
      .catch((err) => {
        setMessage('Não foi possível carregar a lista de reuniões!');
        setTypeMessage(TypeNotification.error);
        setShowNotification(true);
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

  const handleDelete = (id: number) => {
    deleteMeeting(id)
      .then((response) => {
        setMessage('Reunião deletada com sucesso!');
        setTypeMessage(TypeNotification.sucess);
        setShowNotification(true);
      })
      .catch((err) => {
        setMessage('Não foi possível deletar essa reunião!');
        setTypeMessage(TypeNotification.error);
        setShowNotification(true);
      });
  };

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
            <SelectItemButton
              key={item.id}
              onPress={() =>
                navigation.navigate('MeetingForm', {
                  meeting: item,
                })
              }
            >
              <ContentMeeting>
                <HeaderCard>
                  <Title>{item.title}</Title>
                  <DeleteItemButton onPress={() => handleDelete(item.id)}>
                    <Icon name="trash" size={18} color="#000" />
                  </DeleteItemButton>
                </HeaderCard>
                <Info>Data: {formatDate(item.date)}</Info>
                <Info>
                  Horário: {formatHours(item.startAt)} -{' '}
                  {formatHours(item.endAt)}
                </Info>
                <Collabs>
                  <Info>Colaboradores: </Info>
                  {item.collaborators.map((collaborator, index) => {
                    return (
                      <Info key={index}>
                        {collaborator.value}
                        {item.collaborators.length === index + 1 ? '.' : ','}
                      </Info>
                    );
                  })}
                </Collabs>
              </ContentMeeting>
            </SelectItemButton>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default MeetingList;
