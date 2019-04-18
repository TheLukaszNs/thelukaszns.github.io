import styled from 'styled-components';

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
    margin-right: 50px;
  }
`;

type NavbarProps = {
  title: string;
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ title }) => (
  <StyledNav>
    <Title>{title}</Title>
    <Nav>
      <NavItem>contact</NavItem>
      <NavItem>projects</NavItem>
      <NavItem>about</NavItem>
    </Nav>
  </StyledNav>
);

export default Navbar;
