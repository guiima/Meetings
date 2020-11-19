import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.background};
`;

export const Top = styled.View`
  align-items: flex-end;
  padding-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ContentMeeting = styled.View`
  background: ${theme.colors.cardMeeting.background};
  height: 100px;
  width: 95%;
  align-self: center;
  border: 1px solid;
  border-color: ${theme.colors.cardMeeting.borderColor};
  align-items: center;
  padding: 5px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  flex: 1;
  text-align: center;
`;

export const Info = styled.Text`
  margin-top: 5px;
  margin-left: 2px;
  margin-right: 2px;
`;

export const Collabs = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const DeleteItemButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const SelectItemButton = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 30px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
