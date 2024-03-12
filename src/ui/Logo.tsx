import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink className='app-logo' to='/'>
      <img src='/f1_logo.png' />
    </NavLink>
  );
}

export default Logo;
