import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {Text} from 'react-native';

import {Container, Title, Button, TextButton} from './styles';

interface WelcomeProps {
  navigation: NavigationContainerRef;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  return (
    <Container>
      <Title>Bem vindo ao meeting</Title>
      <Button onPress={() => navigation.navigate('MeetingList')}>
        <TextButton>ENTRAR</TextButton>
      </Button>
    </Container>
  );
};

export default Welcome;
