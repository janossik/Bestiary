import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.color.link};
  align-content: center;
  min-height: 40px;
  min-width: 40px;
  padding: 5px 10px;
  margin: 0 0 0 10px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.color.primary};
  outline: none;
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
