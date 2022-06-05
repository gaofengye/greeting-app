import { FC, ReactElement, useState } from 'react';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  tabs: Array<ReactElement | string>;
  panels: Array<ReactElement | string>;
};

const Tabs: FC<Props> = ({ className, tabs, panels }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      <ul className={styles.tabs}>
        {tabs.map((tab, i) => (
          <li key={`tab_${i}`} className={[styles.tab, activeIndex === i ? styles.active : ''].join(' ')} onClick={() => setActiveIndex(i)}>
            {tab}
          </li>
        ))}
      </ul>

      {panels.length > 0 && <div className={styles.panel}>{panels[activeIndex]}</div>}
    </div>
  );
};

export default Tabs;
