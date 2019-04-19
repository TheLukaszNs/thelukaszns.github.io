import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Button from '../Button';
import Link from 'next/link';

//TODO: Replace all calls to **breakpoint** with normal css Media Queries

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  ${breakpoint('mobile', 'desktop')`
    flex-direction: column;
    position: fixed;

  `}
`;

const Title = styled.h2`
  font-size: 2.3em;
  font-weight: normal;
  position: relative;
  transition: all 0.1s;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: -7px;
    left: 0;
    background: #f2994a;
    width: 15%;
    padding: 5px 0;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  &:hover {
    &::before {
      transform: rotateZ(-6deg) skewX(-30deg);
      padding-top: 14px;
      padding-bottom: 14px;
      bottom: 0;

      width: 100%;
    }
  }

  ${breakpoint('mobile', 'desktop')`
    font-size: 2.7em;
    margin-bottom: 20px;

    &::before {
      transform: rotateZ(-6deg) skewX(-30deg);
      padding-top: 14px;
      padding-bottom: 14px;
      bottom: 0;

      width: 100%;
    }
  `}
`;

const Nav = styled.ul`
  list-style-type: none;

  ${breakpoint('mobile', 'desktop')`
    display: none;
  `}
`;

const NavItem = styled.li`
  display: inline-block;
  font-size: 1.6em;

  :not(:last-child) {
    margin-right: 75px;
  }

  ${breakpoint('mobile', 'desktop')`
    display: block;
    width: 100%;

    :not(:last-child) {
      margin: 0 0 20px;
    }
  `}
`;

type NavbarProps = {
  title: string;
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ title }) => (
  <StyledNav>
    <Title>
      <Link href='/'>
        <a>{title}</a>
      </Link>
    </Title>
    <Nav>
      <NavItem>
        <Link href='/contact'>
          <a>
            <Button buttonType='raised'>contact</Button>
          </a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/projects'>
          <a>projects</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href='/about'>
          <a>about</a>
        </Link>
      </NavItem>
    </Nav>
  </StyledNav>
);

export default Navbar;
