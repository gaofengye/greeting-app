import { ReactComponent as BlueCircleSVG } from 'assets/voice/blueCircle.svg';
import { ReactComponent as GreyCircleSVG } from 'assets/voice/greyCircle.svg';
import { ReactComponent as OscillatorSVG } from 'assets/voice/oscillator.svg';
import { ReactComponent as PauseSVG } from 'assets/voice/pause.svg';
import { ReactComponent as PlaySVG } from 'assets/voice/play.svg';
import { ReactComponent as PlayOscillatorSVG } from 'assets/voice/playOscillator.svg';
import { FC, useState } from 'react';

import styles from './styles.module.scss';

const VOICES = ['Asian', 'British', 'American'];

const Voice: FC = () => {
  const [playingIndex, setPlayingIndex] = useState(-1);

  return (
    <ul className={styles.list}>
      {VOICES.map((voice, i) => (
        <li className={[styles.player, playingIndex === i ? styles.active : ''].join(' ')}>
          <button type='button' className={styles.button} onClick={() => setPlayingIndex(i)}>
            {playingIndex === i && (
              <>
                <BlueCircleSVG />
                <PauseSVG className={styles.icon} />
              </>
            )}
            {playingIndex !== i && (
              <>
                <GreyCircleSVG />
                <PlaySVG className={styles.icon} />
              </>
            )}
          </button>

          <div className={styles.info}>
            <span className={styles.name}>{voice}</span>

            <div className={styles.oscillator}>
              {playingIndex === i && <PlayOscillatorSVG />}
              {playingIndex !== i && <OscillatorSVG />}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Voice;
