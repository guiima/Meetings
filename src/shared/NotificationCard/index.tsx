import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export enum TypeNotificationEnum {
  Success = 0,
  Error = 1,
  Warning = 2,
}

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
  z-index: 5;
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
  const {showNotification, message, notificationType} = useSelector(
    (state: any) => state.NotificationReducer,
  );
  const dispatch = useDispatch();

  const setBackground = () => {
    switch (notificationType) {
      case TypeNotificationEnum.Success:
        return theme.colors.notification.success;
      case TypeNotificationEnum.Error:
        return theme.colors.notification.error;
      default:
        return theme.colors.notification.success;
    }
  };

  return showNotification ? (
    <TouchableOpacity
      // onPress={() => dispatch({type: types.TOGGLE_NOTIFICATION})}
      background={setBackground()}
    >
      <Icon name="exclamation" />
      <Text>{message}</Text>
      <Icon name="close" />
    </TouchableOpacity>
  ) : null;
};

export default NotificationCard;
