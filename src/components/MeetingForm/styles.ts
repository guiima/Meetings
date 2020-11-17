import styled from 'styled-components/native';
import {theme} from '../../styles/theme';
import {Dimensions} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.background};
`;

export const ContentForm = styled.View`
  width: ${windowWidth - 40}px;
  align-self: center;
  padding-top: 50px;
  justify-content: space-between;
  /* background-color: red; */
  flex: 1;
`;

export const TextInput = styled.TextInput`
  border: 1px solid;
  border-color: gray;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
`;

export const IconButton = styled.TouchableOpacity`
  background: ${theme.colors.primaryButton.background};
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const ContentButton = styled.Text`
  font-size: 16px;
  color: ${theme.colors.background};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const DateSelected = styled.Text`
  font-size: 16px;
  color: ${theme.colors.primaryColor};
  width: 50%;
  text-align: center;
`;

export const Body = styled.View``;

export const Footer = styled.View`
  background: red;
  margin-bottom: 30px;
`;

export const HideShowButton = styled.TouchableOpacity``;

export const SelectMultipleStyled = styled(SelectMultiple)`
  height: 200px;
`;

export const ContentMultiSelect = styled.View`
  border: 1px solid;
  border-color: gray;
`;
