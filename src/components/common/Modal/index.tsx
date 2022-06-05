import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactElement | Array<ReactElement>;
};

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.backdrop} onClick={() => onClose()}></div>
          <div className={styles.content}>{children}</div>
        </div>
      )}

      {!isOpen && null}
    </>
  );
};

export default Modal;
