import { Outlet } from 'react-router-dom';

import './uiStyles.scss';
import Header from './Header';
import Spinner from 'ui/Spinner';

function AppLayout() {
  return (
    <div className='app-layout'>
      <Header />
      <main className='app-main'>
        <Spinner />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
