import { FC, ReactPropTypes } from 'react';
import style from './Header.module.scss';
import Button from '../Button';
import { useTelegram } from '../../hooks/useTelegram';

interface IHeader {
  className?: string;
  props?: ReactPropTypes;
}

const Header: FC<IHeader> = ({ ...props }) => {
  const { user, onClose } = useTelegram();

  return (
    <header {...props} className={`${style.header} ${props.className}`}>
      <Button onClick={onClose} name='Закрыть' />
      <div className={style.username}>{user?.username}</div>
    </header>
  );
};

export default Header;
