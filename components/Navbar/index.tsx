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
    <Title>{title}</Title>
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
