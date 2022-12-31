import styles from "./Login.module.scss";
import { ReactComponent as Logo } from "assets/icons/nexcc_logo.svg";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextInput from "components/utils/TextInput";

const loginSchema = yup
  .object({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
  })
  .required();

const Login = (props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    debugger;
  };

  return (
    <div className={`${styles.Login}`}>
      <div className="title">
        <h1>NEXCC WAR MEMORIAL</h1>
      </div>
      <div className="logo">
        <Logo />
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            // rules={{ required: true }}
            render={({ field }) => (
              <>
                <TextInput
                  {...field}
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                />
                <p>{errors?.email?.message}</p>
              </>
            )}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
