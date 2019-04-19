import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Button from '../components/Button';
import HeroImg from '../public/hero.png';

const StyledWrapper = styled.main`
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoint('mobile', 'desktop')`
    align-items: flex-start;
    margin-top: 150px;
  `}
`;

const HeroText = styled.div`
  display: inline-flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const HeroImage = styled.div`
  background-image: url(${HeroImg});
  background-size: cover;
  width: 410px;
  height: 400px;

  ${breakpoint('mobile', 'desktop')`
    display: none;
  `}
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const SecondaryText = styled.p`
  font-size: 1.08rem;
  color: #4f4f4f;
`;

const Footer = styled.div`
  display: inline-flex;
  align-items: center;
  /* align-self: center; */
  font-size: 0.9rem;
`;

const Home = () => (
  <StyledWrapper>
    <HeroText>
      <Title>Full-stack Developer</Title>
      <SecondaryText>
        Wanted to build an application recently?
        <br />
        You have landed in the right place to begin.
      </SecondaryText>
      <Footer>
        <Button buttonType='raised'>hire me</Button>
        <span style={{ margin: '0 40px' }}>or</span>
        <Button buttonType='outlined'>check projects</Button>
      </Footer>
    </HeroText>
    <HeroImage />
  </StyledWrapper>
);

export default Home;
