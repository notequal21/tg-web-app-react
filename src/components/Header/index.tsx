import { FC, ReactPropTypes } from 'react';
import style from './Header.module.scss';
import Button from '../Button';

interface IHeader {
  className?: string;
  props?: ReactPropTypes;
}

const Header: FC<IHeader> = ({ ...props }) => {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  return (
    <header {...props} className={`${style.header} ${props.className}`}>
      <Button onClick={onClose} name='Закрыть' />
      <div className={style.username}>{tg.initDataUnsafe?.user?.username}</div>
    </header>
  );
};

export default Header;
