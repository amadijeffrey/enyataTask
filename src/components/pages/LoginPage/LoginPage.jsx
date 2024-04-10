import Logo from "../../atoms/Logo/Logo";
import LoginForm from "../../molecules/LoginForm/LoginForm";
import './LoginPage.scss'

const LoginPage = () => {


  return (
    <div className="login-page-content">
      <div>
        <Logo />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;