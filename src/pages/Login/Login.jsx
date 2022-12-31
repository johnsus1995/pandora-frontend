import styles from "./Login.module.scss";
import { ReactComponent as Logo } from "assets/icons/nexcc_logo.svg";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { RotatingLines } from 'react-loader-spinner'

import TextInput from "components/utils/TextInput";
import Button from "components/utils/Button";
import { useEffect } from "react";

const loginSchema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const Login = (props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // debugger;
  };

  // useEffect(() => {
  //   console.log(errors)
  // },[errors.email])

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
          <div className="text-inputs">
            <div className="email-input">
              <Controller
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <TextInput
                      {...field}
                      varient="small"
                      type="email"
                      placeholder="Email"
                      className="input-contain"
                    />
                    <p>{errors?.email?.message}</p>
                  </>
                )}
              />
            </div>

            <div className="password-input">
              <Controller
                control={control}
                name="password"
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <TextInput
                      {...field}
                      type="password"
                      placeholder="Password"
                      className="input-contain"
                    />
                    <p>{errors?.password?.message}</p>
                  </>
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            isLoading={false}
            btnText="Login"
            className="login-submit-btn"
          />
        </form>
        <footer>
          <h6>Allready have an account? Sign-in<span> here.</span></h6>
        </footer>
      </div>
    </div>
  );
};

export default Login;
