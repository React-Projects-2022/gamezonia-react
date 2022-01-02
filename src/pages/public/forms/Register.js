import { useForm } from "react-hook-form";
import "./forms.css";
import { REGISTER_USER } from "../../../graphql/operations/mutation/user";
import { useMutation } from "@apollo/client";
import { useState } from "react";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [result, setResult] = useState({});

  const [registerUser] = useMutation(REGISTER_USER, {
    update: (__, mutationResult) => {
      const { register } = mutationResult.data;
      setResult(register);

    },
  });

  console.log(result);

  const onSubmit = (data) => {
    registerUser({
      variables: {
        user: {
          email: data.email,
          password: data.password,
          name: data.name,
          lastname: data.lastname,
          birthday: data.birthday,
        },
        include: true,
      },
    });
  };

  return (
    <>
      <h1>Register</h1>
      <p>{result.status}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">First Name</label>
        <input
          placeholder="Input your name"
          {...register("name", {
            required: "This field is a required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="lastname">Last Name</label>
        <input
          placeholder="Input your lastname"
          {...register("lastname", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.lastname && <p>{errors.lastNname.message}</p>}
        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          id="start"
          min="1900-01-01"
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
