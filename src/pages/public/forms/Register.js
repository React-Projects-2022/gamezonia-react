import { useState } from "react";
import { LoginData } from "../../../components/LoginData";
import { useForm } from "react-hook-form";
import "./forms.css";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const defaultValue = "user@gamezonia.com";

  const onSubmit = (data) => {
    setRegisterData({ email: data.email, password: data.password });
  };

  return (
    <>
      <h1>Register</h1>
      {registerData.email !== "" ? (
        <LoginData
          email={registerData.email}
          password={registerData.password}
        />
      ) : (
        <p>Haz click para iniciar sesión</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input
          placeholder="Input your name"
          {...register("firstName", {
            required: "This field is a required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input
          placeholder="Input your lastname"
          {...register("lastName", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
          {...register("birthday", {})}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          placeholder="bluebill1049@hotmail.com"
          type="text"
          {...register("email", {
            required: "this is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          defaultValue="123456"
          placeholder="password"
          {...register("password", { required: true })}
        />

        {errors.password && (
          <p className="validation">This field is required</p>
        )}
        <input type="submit" />
      </form>
    </>
  );
};

export default Register;
