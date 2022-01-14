import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

// TODO Refactor with List SidebarItems objects to dinamically load
const Sidebar = ({ changeTitle }) => (
  <div className="border-end bg-white" id="sidebar-wrapper">
    <div className="sidebar-heading border-bottom bg-light">
      <Link to="/">Home</Link>
    </div>
    <div className="list-group list-group-flush">
      <SidebarItem
        label={"Dashboard"}
        changeTitle={changeTitle}
        route={"/admin"}
      />
      <SidebarItem
        label={"Users"}
        changeTitle={changeTitle}
        route={"/admin/users"}
      />
      <SidebarItem
        label={"Genres"}
        changeTitle={changeTitle}
        route={"/admin/genres"}
      />
      <SidebarItem
        label={"Tags"}
        changeTitle={changeTitle}
        route={"/admin/tags"}
      />
    </div>
  </div>
);

export default Sidebar;
