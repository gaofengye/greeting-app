import { ReactComponent as ArrowDownSVG } from 'assets/arrowDown.svg';
import Button from 'components/common/Forms/Button';
import Modal from 'components/common/Modal';
import { FC, useState } from 'react';

import styles from './styles.module.scss';

const TAGS = ['Email', 'Marketing', 'Greeting', 'Email', 'Marketing', 'Email'];

type Props = {
  value: string;
  onChange: (text: string) => void;
};

const EditableTitle: FC<Props> = ({ value, onChange }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleClickSave = () => {
    onChange(inputValue);
    setIsOpenModal(false);
  };

  const handleCloseModal = () => {
    setInputValue(value);
    setIsOpenModal(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type='text'
          className={styles.input}
          onFocus={() => setIsOpenModal(true)}
        />

        <ArrowDownSVG />
      </div>

      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <div className={styles.modalContent}>
          <div className={styles.description}>
            Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper
          </div>

          <ul className={styles.tags}>
            {TAGS.map((tag, i) => (
              <li key={`tag_${i}`} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>

          <div className={styles.controls} onClick={handleClickSave}>
            <Button className={styles.saveButton}>Save</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditableTitle;
