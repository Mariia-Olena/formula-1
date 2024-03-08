import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from './styles/GlobalStyles';
import AppLayout from 'ui/AppLayout';
import Drivers from 'pages/Drivers';
import Constructors from 'pages/Constructors';
import Champions from 'pages/Champions';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='drivers' element={<Drivers />} />
            <Route path='champions' element={<Champions />} />
            <Route path='constructors' element={<Constructors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
