import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useMessage, TypeNotification} from '../../context/Notification';

interface TouchableOpacityProps {
  background: string;
}

const TouchableOpacity = styled.TouchableOpacity`
  background: ${(props: TouchableOpacityProps) => props.background};
  width: 92%;
  min-height: 40px;
  position: absolute;
  align-self: center;
  top: 8px;
  z-index: 99;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 15px;
`;

const Text = styled.Text`
  color: ${theme.colors.secondaryTextColor};
  font-size: 16px;
  width: 80%;
`;

const NotificationCard = () => {
  const {
    message,
    showNotification,
    setShowNotification,
    typeMessage,
  } = useMessage();

  console.log('showNotificationCard', showNotification);

  const setBackground = () => {
    switch (typeMessage) {
      case TypeNotification.sucess:
        return theme.colors.notification.success;
      case TypeNotification.error:
        return theme.colors.notification.error;
      default:
        return theme.colors.notification.success;
    }
  };

  return showNotification ? (
    <TouchableOpacity
      onPress={() => setShowNotification(false)}
      background={setBackground()}
    >
      <Icon name="exclamation-circle" color="#fff" />
      <Text>{message}</Text>
      <Icon name="close" color="#fff" />
    </TouchableOpacity>
  ) : null;
};

export default NotificationCard;
