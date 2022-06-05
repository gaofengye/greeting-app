import { ReactComponent as PencilSVG } from 'assets/pencil.svg';
import Button from 'components/common/Forms/Button';
import Fieldset from 'components/common/Forms/Fieldset';
import Input from 'components/common/Forms/Input';
import Label from 'components/common/Forms/Label';
import { ChangeEvent, FC, useRef, useState } from 'react';

import styles from './styles.module.scss';

const Profile: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState<any>('/photo.jpg');

  const handleClickUpload = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          setAvatar(reader.result);
        },
        false
      );
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <form className={styles.profile} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.picture}>
        <div className={styles.avatar}>
          <img src={avatar} alt='' />
        </div>
        <button type='button' className={styles.editButton} onClick={handleClickUpload}>
          <PencilSVG className={styles.icon} />
          <input ref={inputRef} onChange={handleChangeFile} type='file' className={styles.inputFile} accept='image/*' />
        </button>
      </div>

      <div className={styles.fields}>
        <Fieldset className={styles.fieldset}>
          <Label>First Name</Label>
          <Input type='text' name='first_name' />
        </Fieldset>
        <Fieldset className={styles.fieldset}>
          <Label>Last Name</Label>
          <Input type='text' name='last_name' />
        </Fieldset>
        <Fieldset className={styles.fieldset}>
          <Label>Email</Label>
          <Input type='email' name='email' />
        </Fieldset>
      </div>

      <Button type='submit'>Save changes</Button>
    </form>
  );
};

export default Profile;
