import { IS_CONNECTED } from 'constants/localStorage';
import { FC, ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  children: ReactElement;
};

const AuthenticationProvider: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isConnected = localStorage.getItem(IS_CONNECTED);
    if (isConnected && isConnected === 'true') {
      if (location.pathname === '/login' || location.pathname === '/register') {
        navigate('/greeting');
      }
    } else {
      if (location.pathname !== '/register') {
        navigate('/login');
      }
    }
  }, [navigate, location.pathname]);

  return children;
};

export default AuthenticationProvider;
