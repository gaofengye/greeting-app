import { FC, MouseEvent, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  type?: 'submit' | 'button' | 'reset';
  variant?: string;
  className?: string;
  children: ReactElement | string;
  onClick?: (e: MouseEvent) => void;
};

const Button: FC<Props> = ({ children, className = '', variant = 'green', type = 'button', onClick }) => {
  return (
    <button className={[styles.button, styles[variant], className].join(' ')} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
