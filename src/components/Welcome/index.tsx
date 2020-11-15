import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import Button from '../../shared/components/Button';
import {Container, Title} from './styles';

interface WelcomeProps {
  navigation: NavigationContainerRef;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  return (
    <Container>
      <Title>Bem vindo ao meeting</Title>
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
