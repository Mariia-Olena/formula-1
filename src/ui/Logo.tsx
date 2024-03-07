import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 2rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo to='/'>
      <Img src='/f1_logo.png' />
    </StyledLogo>
  );
}

export default Logo;
