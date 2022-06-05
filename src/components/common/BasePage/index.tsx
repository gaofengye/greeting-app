import Sidebar from 'components/common/Sidebar';
import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  children?: ReactElement | ReactElement[];
};

const BasePage: FC<Props> = ({ children }) => {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BasePage;
