import styled from 'styled-components/native';
import {theme} from '../../../styles/theme';

interface TouchableOpacityProps {
  background: string;
}

export const TouchableOpacity = styled.TouchableOpacity`
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

export const Text = styled.Text`
  color: ${theme.colors.secondaryTextColor};
  font-size: 16px;
  width: 80%;
`;
