import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Contacts = lazy(() => import('../pages/Contacts'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<Register />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="contacts"
              element={<PrivateRoute component={<Contacts />} redirectTo="/" />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    )
  );
};
