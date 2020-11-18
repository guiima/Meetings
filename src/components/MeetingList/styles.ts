import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background: white;
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
  margin-bottom: 30px;
  border: 1px solid;
  border-color: ${theme.colors.cardMeeting.borderColor};
  align-items: center;
  padding: 5px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
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
