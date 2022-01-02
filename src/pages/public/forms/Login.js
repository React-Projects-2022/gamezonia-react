import { useState } from "react";
import { LoginData } from "./../../../components/LoginData";
import { useForm } from "react-hook-form";
import "./forms.css";
const Login = () => {
  const defaultValue ="mugan86@gmail.com";
  const defaultValueTwo = "user@gamezonia.com";
  console.log(defaultValueTwo);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (data) => {
    setLogin({ email: data.email, password: data.password });
  };

  return (
    <>
      <h1>Login</h1>
      {login.email !== "" ? (
        <LoginData email={login.email} password={login.password} />
      ) : (
        <p>Haz click para iniciar sesión</p>
      )}  
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          defaultValue={defaultValue}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="validation">{errors.email.message}</p>}

        <label htmlFor="password">Email</label>
        <input type="password" 
        defaultValue="123456"
        placeholder="password" {...register("password", { required: true })} />
        
        {errors.password && (
          <p className="validation">This field is required</p>
        )}
        {!errors.password || watch("password") !== " " ? (
          <input type="submit" />
        ) : (
          <input disabled type="submit" />
        )}
      </form>
      
    </>
  );
};

export default Login;
