import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  children: ReactElement | Array<ReactElement>;
};

const Fieldset: FC<Props> = ({ children, className }) => {
  return <fieldset className={[styles.fieldset, className].join(' ')}>{children}</fieldset>;
};

export default Fieldset;
