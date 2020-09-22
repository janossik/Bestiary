import { keyframes } from 'styled-components';

const fast = keyframes`
    0% {
      background-position-x: -18000vw;
      background-position-y: -22000vh;
      opacity: 0;
    }
    15% {
      opacity: 0.6;
    }
    100% {
      background-position-x: 0vw;
      background-position-y: 20000vh;
      opacity: 0;
    }
`;

const normal = keyframes`
    0% {
      background-position-x: -6000vw;
      background-position-y: -6000vh;
      opacity: 0;
    }
    10% {
      opacity: 0.4;
    }
    100% {
      background-position-x: 10vw;
      background-position-y: 6000vh;
      opacity: 0;
    }
`;
const slow = keyframes`
    0% {
      background-position-x: -2000vw;
      background-position-y: -2000vh;
      opacity: 0;
    }
    5% {
      opacity: 0.1;
    }
    100% {
      background-position-x: 30vw;
      background-position-y: 2000vh;
      opacity: 0;
    }
`;

const snow = {
  fast,
  normal,
  slow,
};

export default snow;
