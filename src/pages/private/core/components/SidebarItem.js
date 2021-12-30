import { Link } from "react-router-dom";

const SidebarItem = (props) => {
    const {label, changeTitle, route} = props;
    return (
    <Link
        onClick={() => changeTitle(label)}
        to={route}
        className="list-group-item list-group-item-action list-group-item-light p-3"
      >
        { label }
      </Link>
)};

export default SidebarItem;