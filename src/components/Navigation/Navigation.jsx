import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* {isLoggedIn && (
        <Link  to="/tasks">
          Tasks
        </Link>
      )} */}
    </nav>
  );
};
