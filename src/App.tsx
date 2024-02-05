import React, { useEffect } from 'react';
import Header from './components/Header';
// import style from './App.module.scss';

declare global {
  interface Window {
    Telegram: any;
  }
}

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />
      </div>
    </div>
  );
}

export default App;
