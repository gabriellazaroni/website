import styled, { keyframes } from "styled-components";
import img from '../assets/background.png'
import { motion } from "framer-motion";

interface VisibilityProps {
  isVisible?: boolean;
}

export const BackgroundContainer = styled.div`
  height: 100vh;
  background: url(${img}) no-repeat;
  background-position: right top;
  background-color: #0c0c0c;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
`;

export const CubeContainer = styled(motion.div) <VisibilityProps>`
`

const moveUpwards = keyframes`
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-10px);
  }
  20% {
    transform: translateY(10px);
  }
  30% {
    transform: translateY(-5px);
  }
  40% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0); /* Permanece estático nos outros 2.7 segundos */
  }
`;

export const SecondContainer = styled.div<{ isVisible: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.27);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: var(--font-l);
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.6s ease-in-out;

  .animated-content {
    animation: ${moveUpwards} 3s infinite ease-in-out;
  }
`;

export const WelcomeAndIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const dropLetter = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px); /* Começa 50px abaixo */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Fica na posição normal */
  }
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`;

export const Letter = styled.span<{ delay: number }>`
  display: inline-block;
  font-size: var(--font-n);
  font-weight: 200;
  color: white;
  opacity: 0;
  animation: ${dropLetter} 0.1s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s; 
`;

export const AntonLetter = styled.span<{ delay: number }>`
  display: inline-block;
  font-size: var(--font-xxxxl);
  font-weight: 100;
  color: white;
  opacity: 0;
  animation: ${dropLetter} 0.1s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s; 
`;

export const FlashEffect = styled.div<{ isFlashing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  opacity: ${({ isFlashing }) => (isFlashing ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  z-index: 9999;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  @media(max-width: 675px) {
  margin-top: 20px;

  }
`

export const HeaderMenu = styled(motion.div) <VisibilityProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  gap: 5px;
  padding: 35px 10px;
  border-radius: 10px;
  border: 1px solid #28292a;
  /* background: #28292a; */
  transition: transform 2s ease-in-out, opacity 0.5s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-100%)')};
  position: fixed;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 15px;
  border-radius: 10px; 
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #212121;
  }
`;

export const Icon = styled.img`
  display: block;
  cursor: pointer;
  width: 25px;
`;

export const ArrowIcon = styled.img`
  display: block;
  cursor: pointer;
  width: 50px;
  filter: brightness(0) invert(1); /* Torna a imagem branca */
  transform: rotate(90deg); /* Rotaciona a seta para baixo */
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0px 0px 100px;
  gap: 30px;
  @media(max-width: 675px) {
   padding: 40px 20px
  }
`

export const CubeAndTitleContainer = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: 675px) {
   flex-direction: column-reverse;
   justify-content: center;
  }
`

export const TitleText = styled(motion.h1) <VisibilityProps>`
  font-size: var(--font-xxxxl);
  font-weight: 100;
  color: #c1c1c1;
  max-width: 260px;
  width: 100%;
  @media(max-width: 675px) {
    text-align: center;
  }
`;

export const SubTitleText = styled(motion.p) <VisibilityProps>`
  font-size: var(--font-l);
  line-height: 35px;
  font-weight: 200;
  color: #fff;
  max-width: 500px;
  width: 100%;
  @media(max-width: 675px) {
   text-align: center;
  }
`;

export const ExpProjectsHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: end;
  padding: 0px 50px 40px 0px;
  @media(max-width: 675px) {
   flex-direction: row;
   padding: 0 20px;
   margin-bottom: 20px;
  }
`

export const ExpContainer = styled(motion.div) <VisibilityProps>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;
  @media(max-width: 675px) {
   /* align-items: center; */
   text-align: center;
  }
`

export const NumberExpTitle = styled(motion.h1) <VisibilityProps>`
  font-size: var(--font-xl);
  font-weight: 700;
  color: #c1c1c1;
  max-width: 200px;
  width: 100%;
`

export const ExpAndTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  @media(max-width: 675px) {
   flex-direction: column;
   justify-content: space-around;;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 200px 0px 0px 100px;
  @media(max-width: 675px) {
    flex-direction: column;
    /* padding: 120px 20px 0px 20px; */
    padding: 0px;
    justify-content: space-around;
  }
`

export const AbountText = styled.h1`
  font-size: var(--font-xxxxl);
  font-family: 'Roboto Flex';
  font-weight: 100;
  color: #fff;
  width: 100%;
  max-width: 1000px;
  color: #c1c1c1;
  @media(max-width: 675px) {
    text-align: center;
  }
`

export const AboutDescriptionContainer = styled.div`
  display: flex;
  padding-top: 25px;
  border-top: 1px solid #fff;
  margin-top: 60px;
  gap: 200px;
  @media(max-width: 675px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const BoldText = styled.h1`
  font-family: 'Roboto Flex';
  font-weight: 400;
  font-size: var(--font-xxxl);
  display: inline;  
  white-space: nowrap;
  color: #fff;
  @media(max-width: 675px) {
    text-align: center;
  }
`

export const AboutMeText = styled.p`
  font-family: 'Roboto Flex';
  font-weight: 200;
  font-size: var(--font-l); 
  color: #c1c1c1;
  @media(max-width: 675px) {
    text-align: center;
  }
`