import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ size, theme }) => (size ? theme.size[size] : theme.size.m)};
  font-weight: ${({ weight, theme }) =>
    weight ? theme.weight[weight] : theme.weight.regular};
`;

export default Paragraph;
