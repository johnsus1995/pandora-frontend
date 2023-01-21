import styles from "./Login.module.scss";
import { ReactComponent as Logo } from "assets/icons/nexcc_logo.svg";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { RotatingLines } from 'react-loader-spinner'

import TextInput from "components/utils/TextInput";
import Button from "components/utils/Button";
import { useNavigate } from "react-router-dom";

const loginSchema = yup
  .object({
    email: yup.string().required("Email is required"),
    // password: yup.string().required("Password is required"),
  })
  .required();

const Login = (props) => {
  const navigate = useNavigate();

  const loginForm = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    // register,
    formState: { errors },
  } = loginForm;

  const onSubmit = (data) => {
    // navigate("/");
    console.log(data);
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className={`${styles.Login}`}>
      <div className="title">
        <h1>NExCC WAR MEMORIAL PIRAVOM</h1>
      </div>
      <div className="logo">
        <Logo />
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="email-input">
              <Controller
                control={control}
                name="email"
                render={({field: { onChange, onBlur, value, name, ref, }}) => (
                  <>
                    <TextInput
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      name={name}
                      reg={ref}
                      type="text"
                      placeholder="Email"
                    />
                    <p>{errors?.email?.message}</p>
                  </>
                )}
              />
            </div>
            <Button
            type="submit"
            isLoading={false}
            btnText="Login"
            className="login-submit-btn"
          />
        </form>
        {/* <footer>
          <h6>
            Allready have an account? Sign-in
            <span onClick={navigateToRegister}> here.</span>
          </h6>
        </footer> */}
      </div>
    </div>
  );
};

export default Login;
