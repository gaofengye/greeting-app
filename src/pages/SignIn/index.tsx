import { ReactComponent as SignInBackgroundSVG } from 'assets/signInBackground.svg';
import BasePage from 'components/common/BasePage';
import Button from 'components/common/Forms/Button';
import Fieldset from 'components/common/Forms/Fieldset';
import Input from 'components/common/Forms/Input';
import Label from 'components/common/Forms/Label';
import { CREDENTIAL_KEY, IS_CONNECTED } from 'constants/localStorage';
import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

const SignIn: FC = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [hasError, setHasError] = useState(false);

  const handleClickSubmit = (e: MouseEvent) => {
    const credentials = localStorage.getItem(CREDENTIAL_KEY);
    if (credentials) {
      const parsedCredentials = JSON.parse(credentials);
      if (parsedCredentials.email === formValues.email && parsedCredentials.password === formValues.password) {
        localStorage.setItem(IS_CONNECTED, 'true');
        navigate('/greeting');
      } else {
        setHasError(true);
      }
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
      <h1 className={styles.title}>Sign In</h1>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <Fieldset>
          <Label>Email address</Label>
          <Input type='email' onChange={(e) => handleChangeField(e, 'email')} value={formValues.email} name='email' placeholder='Enter your email' />
        </Fieldset>

        <Fieldset>
          <Label>Password</Label>
          <Link to='/login' className={[styles.forgotLink, styles.blueLink].join(' ')}>
            Forgot?
          </Link>
          <Input
            type='password'
            onChange={(e) => handleChangeField(e, 'password')}
            value={formValues.password}
            name='password'
            placeholder='Enter your password'
          />
        </Fieldset>

        {hasError && <div className={styles.errorMessage}>The email or password is wrong</div>}

        <div className={styles.controls}>
          <Button type='submit' onClick={handleClickSubmit}>
            Login
          </Button>
        </div>

        <div className={styles.additionalText}>
          New here?{' '}
          <Link to='/register' className={styles.blueLink}>
            Signup
          </Link>
        </div>
      </form>

      <SignInBackgroundSVG className={styles.background} />
    </BasePage>
  );
};

export default SignIn;
