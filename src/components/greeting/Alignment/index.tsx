import { FC, useState } from 'react';

import styles from './styles.module.scss';

const ALIGNMENT = ['Left', 'Center', 'Right'];

const Alignment: FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <ul className={styles.list}>
      {ALIGNMENT.map((alignment, i) => (
        <li
          onClick={() => setActiveIndex(i)}
          key={`alignment_${i}`}
          className={[styles.alignChoice, activeIndex === i ? styles.active : ''].join(' ')}
        >
          {alignment}
        </li>
      ))}
    </ul>
  );
};

export default Alignment;
