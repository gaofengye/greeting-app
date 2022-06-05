import Button from 'components/common/Forms/Button';
import { VIDEO_DATA } from 'pages/Greeting';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  values: VIDEO_DATA;
  className?: string;
  onChangeScript: (text: string) => void;
};

const Preview: FC<Props> = ({ values, className, onChangeScript }) => {
  return (
    <div className={[styles.box, className].join(' ')}>
      <div className={styles.image}>
        <img src={values.actor?.image} alt='' />

        {values.actor?.image && <span className={styles.previewTag}>Preview</span>}
      </div>

      <div className={styles.script}>
        <textarea
          placeholder='Type or paste your videoscript here. You can also request a translation of 
an English script to any of 27 other languages'
          value={values.script}
          onChange={(e) => onChangeScript(e.target.value)}
          className={styles.textarea}
        ></textarea>
        <Button className={styles.listenButton} variant='grey'>
          Listen
        </Button>
      </div>
    </div>
  );
};

export default Preview;
