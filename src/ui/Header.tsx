import Logo from 'ui/Logo';
import styled from 'styled-components';
import HeaderMenu from 'ui/HeaderMenu';

const StyledHeader = styled.header`
  background-color: var(--color-grey-800);
  color: var(--color-grey-0);
  padding: 1.2rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
