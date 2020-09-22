import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-content: center;
  align-content: center;
  padding: 5px 10px;
  min-height: 40px;
  min-width: 40px;
  margin: 0 0 0 10px;
  border-radius: 50%;
  border: 3px solid red;
  background-color: snow;
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
