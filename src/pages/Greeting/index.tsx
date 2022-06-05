import BasePage from 'components/common/BasePage';
import Button from 'components/common/Forms/Button';
import Tabs from 'components/common/Tabs';
import Actor, { ACTOR_DATA } from 'components/greeting/Actor';
import Alignment from 'components/greeting/Alignment';
import Background from 'components/greeting/Background';
import EditableTitle from 'components/greeting/EditableTitle';
import Preview from 'components/greeting/Preview';
import Voice from 'components/greeting/Voice';
import { FC, useEffect, useState } from 'react';

import styles from './styles.module.scss';

export type VIDEO_DATA = {
  title: string;
  script: string;
  actor: ACTOR_DATA | null;
};

const Greeting: FC = () => {
  const [videoData, setVideoData] = useState<VIDEO_DATA>({
    title: 'Saying Hi to my customers',
    script: '',
    actor: null,
  });
  const TABS = [
    { tab: 'Actor', component: <Actor value={videoData.actor} onChange={(actor) => handleChangeFieldName('actor', actor)} /> },
    { tab: 'Voice', component: <Voice /> },
    { tab: 'Alignement', component: <Alignment /> },
    { tab: 'Background', component: <Background /> },
  ];

  useEffect(() => {
    import('assets/actors/actor2.svg').then((img) => {
      setVideoData((prev) => ({
        ...prev,
        actor: {
          image: img.default,
          name: 'Yoyo',
          index: 1,
        },
      }));
    });
  }, []);

  const handleChangeFieldName = (fieldName: string, value: string | ACTOR_DATA) => {
    setVideoData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <BasePage>
      <div className={styles.head}>
        <EditableTitle value={videoData.title} onChange={(text) => handleChangeFieldName('title', text)} />

        <div className={styles.controls}>
          <Button variant='grey'>Cancel</Button>
          <Button className={styles.lastButton}>Save</Button>
        </div>
      </div>

      <div className={styles.content}>
        <Preview className={styles.preview} values={videoData} onChangeScript={(text) => handleChangeFieldName('script', text)} />

        <Tabs className={styles.tabs} tabs={TABS.map((tab) => tab.tab)} panels={TABS.map((tab) => tab.component)} />
      </div>
    </BasePage>
  );
};

export default Greeting;
