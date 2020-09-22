import React from 'react';
import Title from '../../../components/atoms/Title/Title';
import Paragraph from '../../../components/atoms/Paragraph/Paragraph';
import MainTemplate from '../../templates/MainTemplate';
import SwordBackground from '../../../components/molecules/SwordBackground/SwordBackground';

const About = () => {
  return (
    <>
      <MainTemplate>
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '10px 40px',
          }}
        >
          <Title tag="h1">RAIN</Title>
          <Paragraph>
            Labore excepteur non incididunt laborum voluptate.
          </Paragraph>
        </div>
      </MainTemplate>
      <SwordBackground />
    </>
  );
};

export default About;
