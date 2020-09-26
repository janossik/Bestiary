import React from 'react';
import Background from '../../atoms/Background/Background';
import Castle from '../../../assets/image/Castle/castle';
import { keyframes } from 'styled-components';

const dayToNight = keyframes`
0%{
  opacity: 0;
  transform:scale(1) translateX(0px) translateY(0px);
}
25%{
  opacity: 1;
  transform:scale(1.2) translateX(-5vw) translateY(5vh);
}
50%{
  opacity: 0;
  ransform:scale(1);
}
75%{
  opacity: 1;
  transform:scale(1.2) translateX(5vw) translateY(-5vh);
  
}
100%{
  opacity: 0;
  transform:scale(1) translateX(0px) translateY(0px);
}
`;
const scale = keyframes`
0%{
  transform:scale(1) translateX(0px) translateY(0px);

}
25%{
  transform:scale(1.2) translateX(-5vw) translateY(5vh);
}
50%{
  ransform:scale(1);

}
75%{
  transform:scale(1.2) translateX(5vw) translateY(-5vh);

}
100%{
  transform:scale(1) translateX(0px) translateY(0px);

}
`;

const CastleBackground = () => {
  return (
    <>
      <Background
        image={Castle.day}
        animation={scale}
        time="60s"
        z="-4"
        x="70%"
      />
      <Background
        image={Castle.night}
        animation={dayToNight}
        z="-1"
        x="70%"
        time="60s"
      />
    </>
  );
};

export default CastleBackground;
