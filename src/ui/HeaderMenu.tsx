import { NavLink } from 'react-router-dom';

function HeaderMenu() {
  return (
    <ul className='app-header-menu'>
      <li>
        <NavLink to='/drivers'>DRIVERS</NavLink>
      </li>
      <li>
        <NavLink to='/champions'>CHAMPIONS</NavLink>
      </li>
      <li>
        <NavLink to='/constructors'>CONSTRUCTORS</NavLink>
      </li>
    </ul>
  );
}

export default HeaderMenu;
