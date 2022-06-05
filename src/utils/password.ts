export enum PASSWORD_STRENGTH {
  STRONG = 'strong',
  MEDIUM = 'medium',
  WEAK = 'weak',
}

export const getPasswordStrength = (password: string) => {
  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
  let mediumPassword = new RegExp(
    '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'
  );

  if (strongPassword.test(password)) {
    return PASSWORD_STRENGTH.STRONG;
  } else if (mediumPassword.test(password)) {
    return PASSWORD_STRENGTH.MEDIUM;
  }

  return PASSWORD_STRENGTH.WEAK;
};
