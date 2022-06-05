import BasePage from 'components/common/BasePage';
import Button from 'components/common/Forms/Button';
import SavedPreview from 'components/saved-videos/SavedPreview';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

const SavedVideos: FC = () => {
  const navigate = useNavigate();
  return (
    <BasePage>
      <div className={styles.head}>
        <h1 className={styles.title}>Saved Videos</h1>
        <Button className={styles.createButton} onClick={() => navigate('/greeting')}>
          Create New
        </Button>
      </div>

      <div className={styles.content}>
        <ul className={styles.list}>
          <li>
            <SavedPreview />
          </li>
        </ul>
      </div>
    </BasePage>
  );
};

export default SavedVideos;
