import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion'
import PlanetOne from '../Assets/Images/planet.svg';
import PlanetTwo from '../Assets/Images/planet-2.svg';
import PlanetThree from '../Assets/Images/planet-3.svg';
import PlanetFour from '../Assets/Images/planet-4.svg';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  font-family: 'Montserrat', sans-serif;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  font-family: 'Montserrat', sans-serif;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  font-family: 'Montserrat', sans-serif;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  font-family: 'Montserrat', sans-serif;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

const Planet = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Forum2K
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            Journey to the unknown
          </motion.p>

        </ColumnLeft>
        <ColumnRight>
          <Image
            src={PlanetOne}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetTwo}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetThree}
            alt='planet'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetFour}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Planet;
