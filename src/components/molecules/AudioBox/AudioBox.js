import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Song from 'assets/Audio/The Witcher.mp3';
import icons from 'assets/image/icons';
import AudioContext from 'contexts/AudioContext/AudioContext';

const AudiosBox = styled.section`
  position: fixed;
  display: ${({ activeAudio }) => (activeAudio ? 'flex' : 'none')};
  height: 50px;
  bottom: 10px;
  right: 10px;
  z-index: 14;
`;
const Image = styled.img`
  display: block;
  margin: auto;
  height: 24px;
  width: 24px;
`;

const AudioBox = ({ song = Song }) => {
  const { activeAudio } = useContext(AudioContext);
  const [play, setplay] = useState(false);
  const audio = useRef(null);
  const range = useRef(null);

  useEffect(() => {
    range.current.value = 0.3;
    audio.current.volume = range.current.value;
    audio.current.loop = true;
  }, []);

  const playFn = () => {
    if (play) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setplay(!play);
  };

  return (
    <>
      <AudiosBox activeAudio={activeAudio}>
        <audio ref={audio}>
          <source src={song} type="audio/mpeg" />
        </audio>
        <input
          style={{
            display: play ? 'block' : 'none',
          }}
          ref={range}
          type="range"
          step={0.01}
          min={0}
          max={1}
          onChange={(event) => {
            let value = event.target.value;
            audio.current.volume = value;
          }}
        />
        <Button onClick={playFn}>
          <Image
            src={play ? `${icons.musicON}` : `${icons.musicOFF}`}
            alt={play ? `on` : `off`}
          />
        </Button>
      </AudiosBox>
    </>
  );
};

AudioBox.propTypes = {};

export default AudioBox;
