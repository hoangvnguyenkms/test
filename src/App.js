import React from 'react';
import { MainLayout } from './commons/layouts/MainLayout';
import { OrderContainer } from './pages/Order/OrderContainer';

const App = () => {
  const orders = 101;
  return (
    <MainLayout>      
      <OrderContainer />
    </MainLayout>
  );
}

export default App;
