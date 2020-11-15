import React from 'react';
import {ButtonContainer, TextButton} from './styles';

interface ButtonProps {
  title: string;
  type: string;
  action: () => void;
  size: number;
}

const Button: React.FC<ButtonProps> = ({title, action, type, size}) => {
  return (
    <ButtonContainer size={size} type={type} onPress={() => action()}>
      <TextButton>{title}</TextButton>
    </ButtonContainer>
  );
};

export default Button;
