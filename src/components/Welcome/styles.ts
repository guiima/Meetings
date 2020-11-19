import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
  /* position: absolute; */
  /* z-index: 1; */
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 15px;
`;
