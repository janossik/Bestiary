import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Background from '../../atoms/Background/Background';
import Smoke from '../../../assets/image/Smoke/Smoke-menu-01.png';
import { smoke__Menu } from '../../../assets/animation/Smoke/smoke.animations';
import AudioContext from 'contexts/AudioContext/AudioContext';

const WrapperNavigation = styled.nav`
  position: fixed;
  top: 0;
  z-index: 11;
`;

const NavigationList = styled.ul`
  position: fixed;
  list-style: none;
  margin: 10vh 0;
  padding: 0;
  width: 100%;
  li {
    padding: 20px;
    margin-top: 25px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.link};
      font-size: ${({ theme }) => theme.size.l};
      font-weight: ${({ theme }) => theme.weight.bold};
      &.active {
        color: ${({ theme }) => theme.color.primary};
        font-size: ${({ theme }) => theme.size.xl};
        transition: 400ms;
      }
    }
  }
`;

const WrapperForAnimation = styled.span`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  transform: translateX(${({ transform }) => (transform ? '-200%' : '0%')})
    scale(${({ transform }) => (transform ? '2' : '1')});
  opacity: ${({ transform }) => (transform ? '0' : '1')};
  transition: 1500ms ease-out;
  z-index: 12;
`;

const Hamburger = styled.button`
  position: fixed;
  right: 5px;
  top: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 14;
`;

const Navigation = () => {
  const [state, setstate] = useState(true);
  const { activeAudio, setActiveAudio } = useContext(AudioContext);
  return (
    <>
      <WrapperNavigation>
        <Hamburger onClick={() => setstate(!state)}>
          <svg
            height="20"
            width="50"
            fill={Number(state) ? 'rgb(234,234,234)' : 'rgb(181,12,15)'}
          >
            <path d="M 5 1 H 45 V 5 H 5 L5 0" />
            <path d="M 5 8 H 45 V 13 H 5 L5 0" />
            <path d="M 5 16 H 45 V 20 H 5 L5 0" />
          </svg>
        </Hamburger>
        <WrapperForAnimation transform={Number(state)}>
          <Background
            image={Smoke}
            animation={smoke__Menu}
            repeat="repeat-y"
            size="120%"
          ></Background>
          <NavigationList>
            <li>
              <NavLink exact to="/" active="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" active="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/bestiary" active="active">
                Bestiary
              </NavLink>
            </li>
            <li>
              <button as="button" onClick={() => setActiveAudio(!activeAudio)}>
                {activeAudio ? 'Hidden control music' : 'Show control music'}
              </button>
            </li>
          </NavigationList>
        </WrapperForAnimation>
      </WrapperNavigation>
    </>
  );
};

export default Navigation;
