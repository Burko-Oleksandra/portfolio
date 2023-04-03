import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ children, type = 'button', ...props }) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};
