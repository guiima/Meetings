import styled from 'styled-components/native';
import {theme} from '../../../styles/theme';

interface ButtonContainerProps {
  type: string;
  size: number;
}

export const ButtonContainer = styled.TouchableOpacity`
  background: ${theme.colors.primaryButton.background};
  background: ${(props: ButtonContainerProps) =>
    props.type === 'primary'
      ? theme.colors.primaryButton.background
      : theme.colors.secondaryButton.background};
  height: 40px;
  width: ${(props: ButtonContainerProps) => props.size}px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: ${theme.colors.primaryButton.colorText};
`;
