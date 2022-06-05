import { ReactComponent as ArrowDownSVG } from 'assets/accordionDown.svg';
import { ReactComponent as ArrowUpSVG } from 'assets/accordionUp.svg';
import { FC, ReactElement, useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  summary: ReactElement | Array<ReactElement> | string;
  details: ReactElement | Array<ReactElement> | string | null;
};

const Accordion: FC<Props> = ({ summary, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={[styles.accordion, isOpen ? styles.active : ''].join(' ')}>
      <div className={styles.summary} onClick={() => setIsOpen((prev) => !prev)}>
        {summary}

        {isOpen && <ArrowUpSVG className={styles.arrow} />}
        {!isOpen && <ArrowDownSVG className={styles.arrow} />}
      </div>

      {isOpen && <div className={styles.details}>{details}</div>}
    </div>
  );
};

export default Accordion;
