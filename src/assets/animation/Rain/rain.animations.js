import { keyframes } from 'styled-components';

const fast = keyframes`
    0% {
      background-position-x: 0vw;
      background-position-y: -220000vh;
      opacity: 0;
    }
    15% {
      opacity: 0.6;
    }
    100% {
      background-position-x: 0vw;
      background-position-y: 200000vh;
      opacity: 0;
    }
`;

const normal = keyframes`
    0% {
      background-position-x: 0vw;
      background-position-y: -60000vh;
      opacity: 0;
    }
    10% {
      opacity: 0.4;
    }
    100% {
      background-position-x: 0vw;
      background-position-y: 60000vh;
      opacity: 0;
    }
`;
const slow = keyframes`
    0% {
      background-position-x: 50vw;
      background-position-y: -20000vh;
      opacity: 0;
    }
    5% {
      opacity: 0.2;
    }
    100% {
      background-position-x: 50vw;
      background-position-y: 20000vh;
      opacity: 0;
    }
`;

const snow = {
  fast,
  normal,
  slow,
};

export default snow;
