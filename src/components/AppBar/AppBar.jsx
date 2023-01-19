import { Header } from '@mantine/core';
import { AuthNav } from 'components/AuthNav/AuhNav';
import { ChangeTheme } from 'components/ChangeTheme/ChangeTheme';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const AppBar = ({ changeTheme }) => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <Navigation /> <ChangeTheme changeTheme={changeTheme} />
      {loggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
