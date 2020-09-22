import React from 'react';
import Background from '../../atoms/Background/Background';
import Sword from '../../../assets/image/Sword/Sword';
import rain from '../../../assets/image/Rain/Rain.png';
import Sanim from '../../../assets/animation/Rain/rain.animations';

const SwordBackground = () => {
  return (
    <>
      <Background image={Sword.Sword_01} z="-4" x="70%" />
      <Background image={Sword.Sword_02} z="-1" x="70%" noMobile />
      <Background
        image={rain}
        z="-3"
        animation={Sanim.fast}
        repeat="repeat"
        noMobile
      />
      <Background
        image={rain}
        z="-1"
        animation={Sanim.slow}
        repeat="repeat"
        noMobile
      />
    </>
  );
};

export default SwordBackground;
