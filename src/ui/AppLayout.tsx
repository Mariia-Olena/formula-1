import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;