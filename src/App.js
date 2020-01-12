import React from 'react';
import { MainLayout } from './commons/layouts/MainLayout';
import { OrderContainer } from './pages/Order/OrderContainer';

const App = () => {
  return (
    <MainLayout>      
      <OrderContainer />
    </MainLayout>
  );
}

export default App;
