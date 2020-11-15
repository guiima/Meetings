import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background: ${theme.colors.primaryButton.background};
  width: 150px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: ${theme.colors.primaryButton.colorText};
`;
