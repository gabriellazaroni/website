import { useRef, useState } from 'react';
import homeIcon from '../assets/home.svg';
import projectsIcon from '../assets/projects.svg';
import toolsIcon from '../assets/tools.svg';
import expIcon from '../assets/exp.svg';
import contactIcon from '../assets/contact.svg';
import infoIcon from '../assets/info.svg';
import arrowtIcon from '../assets/left-arrow.svg';
import {
  AbountText,
  AboutContainer,
  AboutDescriptionContainer,
  AboutMeText,
  AntonLetter,
  ArrowIcon,
  BackgroundContainer,
  BoldText,
  CubeAndTitleContainer,
  CubeContainer,
  DisplayNoneCube,
  ExpAndTitleContainer,
  ExpContainer,
  ExpProjectsHoursContainer,
  FlashEffect,
  HeaderMenu,
  Icon,
  IconContainer,
  Letter,
  MainContainer,
  MenuContainer,
  NameContainer,
  NumberExpTitle,
  SecondContainer,
  SubTitleText,
  TitleContainer,
  TitleText,
  WelcomeAndIconContainer
} from './styles';
import { LargeRotatingCube } from '../components/RotatingCube/LargeRotatingCube';
import { MediumRotatingCube } from '../components/RotatingCube/MediumRotationCube';

export const HomePage = () => {
  const [isSecondVisible, setIsSecondVisible] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleHideSecondContainer = () => {
    setIsSecondVisible(false);
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
      setTimeout(() => setShowMenu(true), 300);
    }, 150);
  };

  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionHomeRef = useRef<HTMLDivElement>(null);

  const handleScrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToHome = () => {
    if (aboutSectionHomeRef.current) {
      aboutSectionHomeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BackgroundContainer>
      <MainContainer ref={aboutSectionHomeRef}>
        <MenuContainer>
          <HeaderMenu
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : -100 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 4.8 }}
            isVisible={showMenu}
          >
            <IconContainer onClick={handleScrollToHome}>
              <Icon src={homeIcon} />
            </IconContainer>
            <IconContainer onClick={handleScrollToAbout}>
              <Icon src={infoIcon} />
            </IconContainer>
            <IconContainer>
              <Icon src={projectsIcon} />
            </IconContainer>
            <IconContainer>
              <Icon src={toolsIcon} />
            </IconContainer>
            <IconContainer>
              <Icon src={expIcon} />
            </IconContainer>
            <IconContainer>
              <Icon src={contactIcon} />
            </IconContainer>
          </HeaderMenu>
        </MenuContainer>
        <ExpAndTitleContainer>
          <TitleContainer>
            <CubeAndTitleContainer>
              <TitleText
                isVisible={showMenu}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : 50 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.2 }}
              >
                Frontend Developer
              </TitleText>
              <CubeContainer
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : 50 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                isVisible={showMenu}
              >
                <MediumRotatingCube />
              </CubeContainer>
            </CubeAndTitleContainer>
            <SubTitleText
              isVisible={showMenu}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : 50 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.2 }}
            >
              Hi! I'm Gabriel. A creative Frontend Developer with 3+ years of experience
              in building high-performance, scalable, and responsive web solutions.
            </SubTitleText>
          </TitleContainer>
          <ExpProjectsHoursContainer>
            <ExpContainer
              isVisible={showMenu}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : 50 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: 2.4 }}
            >
              <NumberExpTitle isVisible={showMenu}>3+</NumberExpTitle>
              <SubTitleText isVisible={showMenu}>
                Years of Experience
              </SubTitleText>
            </ExpContainer>
            <ExpContainer
              isVisible={showMenu}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 3.6 }}
            >
              <NumberExpTitle isVisible={showMenu}>7+</NumberExpTitle>
              <SubTitleText isVisible={showMenu}>
                Completed Projects
              </SubTitleText>
            </ExpContainer>
            <ExpContainer
              isVisible={showMenu}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 4.8 }}
            >
              <NumberExpTitle isVisible={showMenu}>10k</NumberExpTitle>
              <SubTitleText isVisible={showMenu}>
                Hours Worked
              </SubTitleText>
            </ExpContainer>
          </ExpProjectsHoursContainer>
        </ExpAndTitleContainer>
        <FlashEffect isFlashing={isFlashing} />
        <SecondContainer isVisible={isSecondVisible}>
          <NameContainer>
            {['G', 'A', 'B', 'R', 'I', 'E', 'L', 'SPACE', 'A', 'U', 'G', 'U', 'S', 'T', 'O'].map((letter, index) => (
              <AntonLetter key={index} delay={index * 0.1}>
                {letter === 'SPACE' ? <span>&nbsp;</span> : letter}
              </AntonLetter>
            ))}
          </NameContainer>
          <CubeContainer>
            <LargeRotatingCube />
          </CubeContainer>
          <WelcomeAndIconContainer>
            <NameContainer>
              {['W', 'E', 'L', 'C', 'O', 'M', 'E'].map((letter, index) => (
                <Letter key={index} delay={index * 0.1}>{letter}</Letter>
              ))}
            </NameContainer>
            <div className="animated-content">
              <ArrowIcon onClick={handleHideSecondContainer} src={arrowtIcon} alt="" />
            </div>
          </WelcomeAndIconContainer>
        </SecondContainer>
      </MainContainer>
      <AboutContainer ref={aboutSectionRef}>
        <DisplayNoneCube
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : 50 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
          isVisible={showMenu}
        >
          <MediumRotatingCube />
        </DisplayNoneCube>
        <AbountText>
          I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
          <AboutDescriptionContainer>
            <BoldText>I'm Gabriel.</BoldText>
            <AboutMeText>
              I'm a frontend web developer dedicated to turning ideas into creative solutions.
              I specialize in creating seamless and intuitive user experiences.
              My approach focuses on creating scalable, high-performing solutions tailored
              to both user needs and business objectives. By prioritizing performance, accessibility,
              and responsiveness, I strive to deliver experiences that not only engage users but
              also drive tangible results.
            </AboutMeText>
          </AboutDescriptionContainer>
        </AbountText>
        <DisplayNoneCube
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : 50 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
          isVisible={showMenu}
        >
          <MediumRotatingCube />
        </DisplayNoneCube>
      </AboutContainer>
    </BackgroundContainer >
  );
};
