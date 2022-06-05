import { FC } from 'react';

import Offer from './Offer';
import styles from './styles.module.scss';

const Plan: FC = () => {
  return (
    <ul className={styles.list}>
      <li key='free'>
        <Offer
          title='Free'
          description={[
            {
              included: true,
              name: 'Pellentesque interdum libero et',
            },
            {
              included: true,
              name: 'Pellentesque posuere jdfkdfkdfhd',
            },
            {
              included: true,
              name: 'Cras sed felis eget',
            },
            {
              included: true,
              name: 'Maecenas eget luctus',
            },
            {
              included: true,
              name: 'Nullam vitae augue',
            },
          ]}
          price={0}
          isActive={false}
          isUpgrade={false}
        />
      </li>
      <li key='pro'>
        <Offer
          title='Pro'
          description={[
            {
              included: true,
              name: 'Maecenas eget luctus purus',
            },
            {
              included: true,
              name: 'Graesent in sollicitudin velit',
            },
            {
              included: true,
              name: 'Donec in orci vitae nisi',
            },
            {
              included: true,
              name: 'Class aptent taciti',
            },
            {
              included: false,
              name: 'Ut blandit vestibulum',
            },
          ]}
          price={12}
          isActive={false}
          isUpgrade={false}
        />
      </li>
      <li key='team'>
        <Offer
          title='Team'
          description={[
            {
              included: true,
              name: 'Etiam ac finibus nisi, a porttitor',
            },
            {
              included: true,
              name: 'Quisque tincidunt velit a sapien vulputate',
            },
            {
              included: true,
              name: 'Vivamus pulvinar',
            },
            {
              included: true,
              name: 'In hac habitasse platea',
            },
            {
              included: false,
              name: 'Nullam vitae augue',
            },
          ]}
          price={23}
          isActive={true}
          isUpgrade={false}
        />
      </li>
      <li key='agency'>
        <Offer
          title='Agency'
          description={[
            {
              included: true,
              name: 'Praesent in sollicitudin velit',
            },
            {
              included: true,
              name: 'Nulla tincidunt finibus interdum',
            },
            {
              included: true,
              name: 'Nullam vitae augue',
            },
            {
              included: true,
              name: 'Curabitur eleifend',
            },
            {
              included: true,
              name: 'Quisque vel ex enim',
            },
          ]}
          price={43}
          isActive={false}
          isUpgrade={true}
        />
      </li>
    </ul>
  );
};

export default Plan;
