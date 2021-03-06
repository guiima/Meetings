import React, {useEffect} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import Button from '../../shared/components/Button';
import {Container, Title} from './styles';
import {saveCollaborators} from '../../services/collaborators';

interface WelcomeProps {
  navigation: NavigationContainerRef;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const savingCollaborators = () => {
    saveCollaborators();
  };

  useEffect(() => {
    savingCollaborators();
  }, []);

  return (
    <Container>
      <Title>Bem vindo ao Meetings</Title>
      <Button
        size={150}
        type="primary"
        title="ENTRAR"
        action={() => navigation.navigate('MeetingList')}
      />
    </Container>
  );
};

export default Welcome;
