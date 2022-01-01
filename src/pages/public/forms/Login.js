import { useState } from "react";
import { LoginData } from "./../../../components/LoginData";
const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const passwordsList = ["123456", "1234"];

  return (
    <>
      <h1>Login</h1>
      <p>Login layout</p>
      <button
        onClick={() =>
          setLogin({
            email: "mugan86@gmail.com",
            password: passwordsList[Math.floor(Math.random() * 2)],
          })
        }
      >
        Click me!
      </button>
      {login.email !== "" ? (
        <LoginData email={login.email} password={login.password} />
      ) : (
        <p>Haz click para iniciar sesión</p>
      )}
    </>
  );
};

export default Login;
