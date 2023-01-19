import { SimpleGrid } from '@mantine/core';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';

import 'aos/dist/aos.css';
import Home from 'pages/Home';
import { RestrictedRoute } from 'RestrictedRoute';
import Register from 'pages/Register';
import Login from 'pages/Login';
import { PrivateRoute } from 'PrivateRoute';
import { ContactsPage } from 'pages/ContactsPage';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <SimpleGrid cols={1} spacing="md">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </SimpleGrid>
    </>
  );
};
