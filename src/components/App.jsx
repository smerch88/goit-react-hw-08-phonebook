import { Container, MantineProvider, SimpleGrid } from '@mantine/core';
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
import { MyGlobalStyles } from 'global.Styled';
import { useState } from 'react';

export const App = () => {
  const [colorScheme, setColorScheme] = useState('dark');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const changeTheme = () => {
    colorScheme === 'dark' ? setColorScheme('light') : setColorScheme('dark');
  };

  return (
    <>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{ colorScheme: colorScheme }}
      >
        <MyGlobalStyles />
        <Container>
          <SimpleGrid cols={1} spacing="lg">
            <Routes>
              <Route path="/" element={<Layout changeTheme={changeTheme} />}>
                <Route index element={<Home changeTheme={changeTheme} />} />
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
                    <RestrictedRoute
                      redirectTo="/contacts"
                      component={<Login />}
                    />
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
        </Container>
      </MantineProvider>
    </>
  );
};
