import { Outlet } from 'react-router-dom';

import './uiStyles.scss';
import Header from './Header';

function AppLayout() {
  return (
    <div className='app-layout'>
      <Header />
      <main className='app-main'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
