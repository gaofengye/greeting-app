import { ReactComponent as AvatarSVG } from 'assets/avatar.svg';
import { ReactComponent as CameraSVG } from 'assets/camera.svg';
import { ReactComponent as LogoSVG } from 'assets/greetingLogo.svg';
import { ReactComponent as SavedVideosSVG } from 'assets/play.svg';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './styles.module.scss';

const Sidebar: FC = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <Link to='/greeting' className={[styles.link, styles.logo].join(' ')}>
        <LogoSVG />
      </Link>

      <Link to='/greeting' className={[styles.link, styles.hoverable, location.pathname === '/greeting' ? styles.active : ''].join(' ')}>
        <CameraSVG />
      </Link>

      <Link to='/saved-videos' className={[styles.link, styles.hoverable, location.pathname === '/saved-videos' ? styles.active : ''].join(' ')}>
        <SavedVideosSVG />
      </Link>

      <Link to='/account' className={styles.avatar}>
        <AvatarSVG />
      </Link>
    </aside>
  );
};

export default Sidebar;
