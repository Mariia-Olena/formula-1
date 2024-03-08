import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <NavLink to='/drivers'>DRIVERS</NavLink>
      </li>
      <li>
        <NavLink to='/champions'>CHAMPIONS</NavLink>
      </li>
      <li>
        <NavLink to='/constructors'>CONSTRUCTORS</NavLink>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
