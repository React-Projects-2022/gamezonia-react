import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Public = () => (
  <>
    <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        <Button variant="primary">Home</Button>
      </Link>
      <Link to="/admin" style={{ padding: 5 }}>
        <Button variant="primary">Admin</Button>
      </Link>
      <Link to="/notfound" style={{ padding: 5 }}>
        <Button variant="primary">Not found</Button>
      </Link>
    </nav>
    <Outlet />
  </>
);

export default Public;
