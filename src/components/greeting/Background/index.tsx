import { ReactComponent as UploadSVG } from 'assets/upload.svg';
import Accordion from 'components/common/Accordion';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import { getBackgroundName, getImages } from './constants';
import styles from './styles.module.scss';

export type BACKGROUND_DATA = {
  image: any;
  name: string;
  index: number;
};

const Background: FC = () => {
  const [backgrounds, setBackgrounds] = useState<Array<any>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    Promise.all(getImages()).then((imagesDefault) => {
      setBackgrounds(
        imagesDefault.map((img, index) => ({
          image: img.default,
          index,
          name: getBackgroundName(index),
        }))
      );
    });
  }, []);

  const handleClickFile = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          setBackgrounds((prev) => [
            ...prev,
            {
              image: reader.result,
              index: backgrounds.length,
              name: file.name,
            },
          ]);
        },
        false
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className={styles.choices}>
      <Accordion
        summary={'Images'}
        details={
          <ul className={styles.list}>
            <li className={[styles.item, styles.uploadItem].join(' ')}>
              <label className={styles.image} onClick={handleClickFile}>
                <UploadSVG />
              </label>
              <input onChange={handleChangeFile} accept='image/*' ref={inputRef} type='file' className={styles.inputFile} />
              <span className={styles.name}>Upload</span>
            </li>
            {backgrounds.map((background, i) => (
              <li className={[styles.item, activeIndex === i ? styles.active : ''].join(' ')} onClick={() => setActiveIndex(i)}>
                <img alt='' className={styles.image} src={background.image} />
                <span className={styles.name}>{background.name}</span>
              </li>
            ))}
          </ul>
        }
      />
      <Accordion summary={'Solid Colours'} details={null} />
      <Accordion summary={'Videos'} details={null} />
    </div>
  );
};

export default Background;
