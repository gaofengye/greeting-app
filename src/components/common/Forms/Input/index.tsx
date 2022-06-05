import { ChangeEvent, FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  type?: string;
  name?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: FC<Props> = ({ name, required = false, type = 'text', value, onChange, placeholder = '' }) => {
  return <input name={name} required={required} value={value} placeholder={placeholder} onChange={onChange} type={type} className={styles.input} />;
};

export default Input;
