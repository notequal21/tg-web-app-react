import React, { useEffect } from 'react';
import Header from './components/Header';
import { useTelegram } from './hooks/useTelegram';
import Button from './components/Button';
// import style from './App.module.scss';

declare global {
  interface Window {
    Telegram: any;
  }
}

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />
        <Button onClick={onToggleButton} name='toggle' />
      </div>
    </div>
  );
}

export default App;
