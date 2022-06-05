import { ReactComponent as SettingsSVG } from 'assets/settings.svg';
import { FC, useEffect, useState } from 'react';

import styles from './styles.module.scss';

const SavedPreview: FC = () => {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    import('assets/actors/actor2.svg').then((img) => {
      setImage(img.default);
    });
  }, []);

  return (
    <div className={styles.preview}>
      <img src={image} className={styles.image} alt='' />
      <span className={styles.title}>Saying Hi to users!</span>
      <ul className={styles.tags}>
        <li className={styles.tag}>Email</li>
        <li className={styles.tag}>Marketing</li>
        <li className={styles.tag}>Greeting</li>
      </ul>
      <button type='button' className={styles.settingsButton}>
        <SettingsSVG />
      </button>
    </div>
  );
};

export default SavedPreview;
