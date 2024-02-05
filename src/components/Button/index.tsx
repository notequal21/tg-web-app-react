import { FC, ReactPropTypes } from 'react';
import style from './Button.module.scss';

interface IButton {
  name: string;
  className?: string;
  onClick?: () => void;
  props?: ReactPropTypes;
}

const Button: FC<IButton> = ({ name, ...props }) => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      className={`${style.button} ${props.className}`}
    >
      {name}
    </button>
  );
};

export default Button;
