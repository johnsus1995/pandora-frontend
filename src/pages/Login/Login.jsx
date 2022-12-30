import styles from "./Login.module.scss";
import {ReactComponent as Logo} from "assets/icons/nexcc_logo.svg"

const Login = (props) => {
  return (
    <div className={`${styles.Login}`}>
      <div className="title">
        <h1>NEXCC WAR MEMORIAL</h1>
      </div>
      <div className="logo">
        <Logo/>
      </div>
      <div className="login-form">Form</div>
    </div>
  );
};

export default Login;
