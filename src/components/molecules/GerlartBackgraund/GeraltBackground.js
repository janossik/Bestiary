import React from 'react';
import Background from '../../atoms/Background/Background';
import Geralt from '../../../assets/image/Gelart/Gelart';
import snow from '../../../assets/image/Snow/Snow.png';
import Sanim from '../../../assets/animation/Snow/snow.animations';

const GeraltBackground = () => {
  return (
    <>
      <Background image={Geralt.Geralt_01} z="-6" x="70%" />
      <Background image={Geralt.Geralt_02} z="-4" x="70%" noMobile />
      <Background image={Geralt.Geralt_03} z="-2" x="70%" noMobile />
      <Background
        image={snow}
        z="-5"
        animation={Sanim.fast}
        repeat="repeat"
        noMobile
      />
      <Background
        image={snow}
        z="-3"
        animation={Sanim.normal}
        repeat="repeat"
        noMobile
      />
      <Background
        image={snow}
        z="-1"
        animation={Sanim.slow}
        repeat="repeat"
        noMobile
      />
    </>
  );
};

export default GeraltBackground;
