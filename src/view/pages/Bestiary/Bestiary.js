import React, { useEffect, useState } from 'react';
import Title from '../../../components/atoms/Title/Title';
import Paragraph from '../../../components/atoms/Paragraph/Paragraph';
import MainTemplate from '../../templates/MainTemplate';
import SwordBackground from '../../../components/molecules/CastleBackground/CastleBackground';
import ContentBox from '../../../components/atoms/ContentBox/ContentBox';

const Bestiary = () => {
  const [monster, setMonster] = useState([]);
  useEffect(() => {
    fetch('https://run.mocky.io/v3/ab18785d-9bdd-4177-91c3-fcd3a911b6a1')
      .then((response) => response.json())
      .then((data) => setMonster(data));
  }, []);
  return (
    <>
      <MainTemplate>
        <ContentBox right>
          {monster.map((monster) => (
            <ContentBox full>
              <Title tag="h3">{monster.name}</Title>
              <Paragraph>{monster.content}</Paragraph>
              <Paragraph size="s" weight="light">
                {monster.recommended}
              </Paragraph>
            </ContentBox>
          ))}
        </ContentBox>
      </MainTemplate>
      <SwordBackground />
    </>
  );
};

export default Bestiary;
