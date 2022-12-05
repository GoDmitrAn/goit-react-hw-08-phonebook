import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserName, Wrapper } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <IconButton onClick={() => dispatch(logout())}>
        <LogoutIcon fontSize="large" />
      </IconButton>
    </Wrapper>
  );
};
