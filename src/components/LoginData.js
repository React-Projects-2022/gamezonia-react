import { LOGIN_QUERY } from "./../graphql/operations/query/user";
import { useQuery } from "@apollo/client";
export const LoginData = ({ email, password }) => {
  const { data, error, loading } = useQuery(LOGIN_QUERY, {
    variables: { email, password, include: false },
  });

  
  console.log(loading, data);

  if (data && data.login.status) {
    window.alert("LOGIN OK");
    window.location.replace("/");
  }
  return (
    <>
      {loading ? <p>Loading...</p> : (error) ? <p>{error}</p>: <p>{data.login.message}</p>}
    </>
  );
};
