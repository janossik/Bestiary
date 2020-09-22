import styled, { css } from 'styled-components';

const Background = styled.span`
  position: fixed;
  display: ${({ display = 'inline' }) => display};
  top: ${({ top = '0' }) => top};
  left: ${({ left = '0' }) => left};
  bottom: ${({ bottom }) => bottom};
  height: 100vh;
  width: ${({ width = '100vw' }) => width};
  background-image: url(${({ image }) => image});
  background-size: ${({ size = 'cover' }) => size};
  background-position-x: ${({ x = '0%' }) => x};
  background-position-y: ${({ y = '0%' }) => y};
  background-repeat: ${({ repeat = 'no-repeat' }) => repeat};
  z-index: ${({ z = '-1' }) => z};

  ${({ animation }) =>
    animation &&
    css`
      animation: ${({ animation }) => animation} ${({ time = '360s' }) => time}
        linear infinite;
    `}
  ${({ noMobile }) =>
    noMobile &&
    css`
      @media screen and (max-width: 600px) {
        display: none;
      }
    `}
`;
export default Background;
