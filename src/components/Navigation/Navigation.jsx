import { useAuth } from 'hooks';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from './Navigation.styled';
import ContactsIcon from '@mui/icons-material/Contacts';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Link to="/">
        <HomeIcon fontSize="large" />
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          <ContactsIcon fontSize="large" />
        </Link>
      )}
    </nav>
  );
};
