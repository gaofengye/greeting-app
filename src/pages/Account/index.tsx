import Billing from 'components/account/Billing';
import Plan from 'components/account/Plan';
import Profile from 'components/account/Profile';
import BasePage from 'components/common/BasePage';
import Tabs from 'components/common/Tabs';
import { IS_CONNECTED } from 'constants/localStorage';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

const Account: FC = () => {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    localStorage.removeItem(IS_CONNECTED);
    navigate('/login');
  };

  return (
    <BasePage>
      <div className={styles.head}>
        <h1 className={styles.title}>My Account</h1>

        <button type='button' className={styles.logoutButton} onClick={handleClickLogout}>
          Logout
        </button>
      </div>

      <div className={styles.content}>
        <Tabs tabs={['Profile', 'My Plan', 'Billing']} panels={[<Profile />, <Plan />, <Billing />]} />
      </div>
    </BasePage>
  );
};

export default Account;
