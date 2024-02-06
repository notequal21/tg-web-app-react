import React, { useEffect } from 'react';
import Header from './components/Header';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Form from './components/Form';
// import style from './App.module.scss';

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />
        {/* <Button onClick={onToggleButton} name='toggle' /> */}
        <Routes>
          <Route index element={<ProductList />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
