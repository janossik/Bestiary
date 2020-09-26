import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';

const Content = styled.main`
  width: 100%;
  padding: 10px;
  margin: 40px 0 0 0;
  color: snow;
  z-index: 10;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
      <GlobalStyle />
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default MainTemplate;
