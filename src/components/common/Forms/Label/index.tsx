import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  children: ReactElement | string;
};

const Label: FC<Props> = ({ children }) => {
  return <label className={styles.label}>{children}</label>;
};

export default Label;
