import { ReactComponent as CheckSVG } from 'assets/check.svg';
import { ReactComponent as CrossSVG } from 'assets/cross.svg';
import { FC } from 'react';

import styles from './styles.module.scss';

export type POINT = {
  included: boolean;
  name: string;
};

type Props = {
  title: string;
  description: Array<POINT>;
  price: number;
  isActive: boolean;
  isUpgrade: boolean;
};

const Offer: FC<Props> = ({ title, description, price, isActive, isUpgrade }) => {
  return (
    <div className={[styles.offer, isActive ? styles.active : ''].join(' ')}>
      <h3 className={styles.title}>{title}</h3>
      <ul>
        {description.map((desc, i) => (
          <li key={`desc_${i}`} className={styles.descPoint}>
            {desc.included && <CheckSVG />}
            {!desc.included && <CrossSVG />}
            {desc.name}
          </li>
        ))}
      </ul>
      <div className={styles.price}>
        <span className={styles.currency}>$</span>
        {price}
      </div>
      <button type='button' className={styles.button}>
        {!isUpgrade && !isActive && <span className={styles.downgrade}>Downgrade</span>}
        {isUpgrade && !isActive && <span className={styles.upgrade}>Upgrade</span>}
        {isActive && <span className={styles.current}>Current Plan</span>}
      </button>
    </div>
  );
};

export default Offer;
