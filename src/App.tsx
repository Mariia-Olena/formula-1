import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { QuizProvider } from 'context/QuizContext';
import AppLayout from 'ui/AppLayout';
import Drivers from 'pages/Drivers';
import Constructors from 'pages/Constructors';
import Champions from 'pages/Champions';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='drivers' element={<Drivers />} />

            <Route
              path='champions'
              element={
                <QuizProvider>
                  <Champions />
                </QuizProvider>
              }
            />

            <Route path='constructors' element={<Constructors />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
