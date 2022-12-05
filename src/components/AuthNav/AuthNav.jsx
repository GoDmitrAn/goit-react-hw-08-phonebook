import { Link } from 'components/Navigation/Navigation.styled';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { AuthBox } from './AuthNav.styled';
import LoginIcon from '@mui/icons-material/Login';
export const AuthNav = () => {
  return (
    <AuthBox>
      <Link to="/register">
        <AppRegistrationIcon fontSize="large" />
      </Link>
      <Link to="/login">
        <LoginIcon fontSize="large" />
      </Link>
    </AuthBox>
  );
};
