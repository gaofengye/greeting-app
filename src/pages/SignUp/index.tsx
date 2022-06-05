import { ReactComponent as SignInBackgroundSVG } from 'assets/signInBackground.svg';
import BasePage from 'components/common/BasePage';
import Button from 'components/common/Forms/Button';
import Fieldset from 'components/common/Forms/Fieldset';
import Input from 'components/common/Forms/Input';
import Label from 'components/common/Forms/Label';
import { CREDENTIAL_KEY, IS_CONNECTED } from 'constants/localStorage';
import { ChangeEvent, FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPasswordStrength, PASSWORD_STRENGTH } from 'utils/password';

import styles from './styles.module.scss';

const SignUp: FC = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleClickSubmit = () => {
    if (formValues.email && formValues.fullName && formValues.password) {
      localStorage.setItem(CREDENTIAL_KEY, JSON.stringify(formValues));
      localStorage.setItem(IS_CONNECTED, 'true');
      navigate('/greeting');
    }
  };

  const renderPasswordStrength = (password: string) => {
    switch (getPasswordStrength(password)) {
      case PASSWORD_STRENGTH.STRONG:
        return <span className={styles.strong}>Strong</span>;

      case PASSWORD_STRENGTH.MEDIUM:
        return <span className={styles.medium}>Medium</span>;

      case PASSWORD_STRENGTH.WEAK:
        return <span className={styles.weak}>Weak</span>;
    }
  };

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>, fieldName: string) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldName]: e.target.value,
    }));
  };

  return (
    <BasePage>
      <h1 className={styles.title}>Create an account</h1>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Fieldset>
          <Label>Full name</Label>
          <Input
            type='text'
            required
            onChange={(e) => handleChangeField(e, 'fullName')}
            value={formValues.fullName}
            name='full_name'
            placeholder='Enter your full name'
          />
        </Fieldset>

        <Fieldset>
          <Label>Email address</Label>
          <Input
            type='email'
            onChange={(e) => handleChangeField(e, 'email')}
            value={formValues.email}
            required
            name='email'
            placeholder='Enter your email'
          />
        </Fieldset>

        <Fieldset>
          <Label>New Password</Label>
          <span className={styles.strength}>{formValues.password ? renderPasswordStrength(formValues.password) : ''}</span>
          <Input
            type='password'
            required
            onChange={(e) => handleChangeField(e, 'password')}
            value={formValues.password}
            name='password'
            placeholder='Enter your new password'
          />
        </Fieldset>

        <div className={styles.controls}>
          <Button type='submit' onClick={handleClickSubmit}>
            Signup
          </Button>
        </div>

        <div className={styles.additionalText}>
          Already user?{' '}
          <Link to='/login' className={styles.blueLink}>
            Login
          </Link>
        </div>
      </form>

      <SignInBackgroundSVG className={styles.background} />
    </BasePage>
  );
};

export default SignUp;
