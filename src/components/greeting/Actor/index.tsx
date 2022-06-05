import { FC, useEffect, useState } from 'react';

import { getActorImages, getActorName } from './contants';
import styles from './styles.module.scss';

export type ACTOR_DATA = {
  image: any;
  name: string;
  index: number;
};

type Props = {
  value: ACTOR_DATA | null;
  onChange: (actor: ACTOR_DATA) => void;
};

const Actor: FC<Props> = ({ value, onChange }) => {
  const [actors, setActors] = useState<Array<any>>([]);
  const [activeIndex, setActiveIndex] = useState(value ? value.index : 1);

  useEffect(() => {
    Promise.all(getActorImages()).then((imagesDefault) => {
      setActors(
        imagesDefault.map((img, index) => ({
          image: img.default,
          index,
          name: getActorName(index),
        }))
      );
    });
  }, []);

  const handleClickImage = (index: number) => {
    setActiveIndex(index);
    onChange(actors[index]);
  };

  return (
    <ul className={styles.list}>
      {actors.map((actor, i) => (
        <li key={`actor_${i}`} className={styles.actor}>
          <img
            src={actor.image}
            alt=''
            className={[styles.image, activeIndex === i ? styles.active : ''].join(' ')}
            onClick={() => handleClickImage(i)}
          />
          {actor.name}
        </li>
      ))}
    </ul>
  );
};

export default Actor;
