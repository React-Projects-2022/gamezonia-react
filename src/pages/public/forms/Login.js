import { useContext, useState } from "react";
import { LoginData } from "../../../components/LoginData";
import { useForm } from "react-hook-form";
import "./forms.css";
import { EMAIL_VALIDATIONS } from "../../../constants/regex";
import { AppContext } from "../../../application/provider";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange"
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loginState] = useContext(AppContext);

  const defaultValue = "user@gamezonia.com";

  const onSubmit = (data) => {
    setLogin({ email: data.email, password: data.password });
  };

  if (loginState.token !== "" && !new Date(loginState.expiresIn).getTime() < new Date().getTime() / 1000)
   {
     console.log("Session OK");
     window.location.replace("/");
   }
  return (
    <div className="container mb-2">
      <h1>Login</h1>
      {login.email !== "" ? (
        <LoginData email={login.email} password={login.password} />
      ) : (
        <p>Haz click para iniciar sesión</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            autoFocus
            className="form-control"
            defaultValue={defaultValue}
            placeholder="Input email address"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: EMAIL_VALIDATIONS,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="validation alert alert-danger">{errors.email.message}</p>}{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            defaultValue="123456"
            placeholder="Input password"
            {...register("password", { required: true, minLength: 6})}
          />

          {errors.password && (
            <p className="validation alert alert-danger">This field is required and min length is 6 characters</p>
          )}
        </div>
        <input type="submit" className="btn btn-dark" />
      </form>
    </div>
  );
};

export default Login;
