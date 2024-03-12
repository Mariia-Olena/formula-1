import './uiStyles.scss';
import Header from './Header';
import { Outlet } from 'react-router-dom';

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
