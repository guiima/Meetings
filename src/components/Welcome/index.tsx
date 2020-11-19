import React, {useEffect} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import Button from '../../shared/components/Button';
import {Container, Title} from './styles';
import {saveCollaborators} from '../../services/collaborators';
import {useMessage, TypeMessage} from '../../context/Notification';

interface WelcomeProps {
  navigation: NavigationContainerRef;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const {message, setMessage} = useMessage();
  console.log(message);

  const savingCollaborators = () => {
    saveCollaborators()
      .then((response) => {
        console.log('foi', response);
      })
      .catch((err) => {
        console.log('não foi', err);
      });
  };

  useEffect(() => {
    savingCollaborators();
  }, []);

  return (
    <Container>
      <Title>Bem vindo ao meeting</Title>
      <Button
        size={150}
        type="primary"
        title="ENTRAR"
        action={() => setMessage(TypeMessage.sucess)}
        // action={() => navigation.navigate('MeetingList')}
      />
    </Container>
  );
};

export default Welcome;
