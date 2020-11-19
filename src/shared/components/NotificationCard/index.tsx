import React, {useEffect} from 'react';
import {theme} from '../../../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useMessage, TypeNotification} from '../../../context/Notification';

import {Text, TouchableOpacity} from './styles';

const NotificationCard = () => {
  const {
    message,
    showNotification,
    setShowNotification,
    typeMessage,
  } = useMessage();

  useEffect(() => {
    setTimeout(function () {
      setShowNotification(false);
    }, 2000);
  }, [showNotification]);

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
