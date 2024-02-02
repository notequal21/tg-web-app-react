import React, { useEffect } from 'react';
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
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default App;
