import { LOGIN_QUERY } from "./../graphql/operations/query/user";
import { useQuery } from "@apollo/client";
export const LoginData = ({ email, password }) => {
  const { data, error, loading } = useQuery(LOGIN_QUERY, {
    variables: { email, password, include: false },
  });

  if (error || loading) {
    return null;
  }
  console.log(loading, data);

  if (data && data.login.status) {
    window.alert("LOGIN OK");
    window.location.replace("/");
  }
  console.log("Login MALO");
  console.log(data.login, loading);
  //

  return (
    <>
      {loading ? <p>Loading...</p> : <p>{JSON.stringify(data.login.status)}</p>}
    </>
  );
};
