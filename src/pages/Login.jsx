import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
