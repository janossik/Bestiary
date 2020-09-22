import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
`;

export default Paragraph;
