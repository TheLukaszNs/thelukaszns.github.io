import styled from 'styled-components';
import Button from '../Button';
import Link from 'next/link';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
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
`;

const Nav = styled.ul`
  list-style-type: none;
`;

const NavItem = styled.li`
  display: inline;
  font-size: 1.6em;

  :not(:last-child) {
    margin-right: 75px;
  }
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
