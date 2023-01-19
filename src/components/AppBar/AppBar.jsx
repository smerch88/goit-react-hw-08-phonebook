import { AuthNav } from 'components/AuthNav/AuhNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const AppBar = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {loggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
