import { LOGIN_QUERY } from "../graphql/operations/query/user";
import { useQuery } from "@apollo/client";
import { useContext } from "react";

import PropTypes from "prop-types";
import { AppContext } from "../application/provider";

export const LoginData = ({ email, password }) => {
  const { data, error, loading } = useQuery(LOGIN_QUERY, {
    variables: { email, password, include: false },
  });

  const [loginState, loginSetState] = useContext(AppContext);

  if (loginState.displayName !== "") {
    console.log(loginState.displayName);
  }

  // console.log(loading, data);

  if (data && data.login.status) {
    console.log(data.login.token);
    const sessionData = {
      displayName: "Gamezonia",
      token: data.login.token,
      expiresIn: new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
    };
    localStorage.setItem("session", JSON.stringify(sessionData));
    loginSetState(sessionData);
    // return <p>OK</p>;
    // window.alert("LOGIN OK");
    window.location.replace("/");
  }
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p className="alert alert-danger">{data.login.message}</p>
      )}
    </>
  );
};

// Para obligar pasar el argumento para el objeto
LoginData.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
