import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {loggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </nav>
  );
};
