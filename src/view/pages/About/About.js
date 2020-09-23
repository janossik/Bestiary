import React from 'react';
import Title from '../../../components/atoms/Title/Title';
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
          <Title tag="h2">RAIN</Title>
          <Title tag="h3">RAIN</Title>
          <Title tag="h4">RAIN</Title>
          <Title tag="h5">RAIN</Title>
          <Title tag="h6">RAIN</Title>
        </div>
      </MainTemplate>
      <SwordBackground />
    </>
  );
};

export default About;
