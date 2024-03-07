import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import Drivers from '@/pages/Drivers';
import Constructors from '@/pages/Constructors';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='drivers' element={<Drivers />} />
            <Route path='constructors' element={<Constructors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
