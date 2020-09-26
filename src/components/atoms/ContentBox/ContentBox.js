import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  margin-bottom: 40px;
  padding: 20px 40px;
  width: 100%;
  margin-left: ${({ left }) => left && 'auto'};
  margin-right: ${({ right }) => right && 'auto'};
  background-color: ${({ theme }) => theme.color.box};
  @media (min-width: 800px) {
    width: ${({ full }) => (full ? '100%' : '60%')};
  }
`;

const ContentBox = ({ children, full, left, right }) => {
  return (
    <Wrapper full={full} left={left} right={right}>
      {children}
    </Wrapper>
  );
};
export default ContentBox;
