import "./Slidebar.css";
const Slidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 bg-light vh-100">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <button className="nav-link py-3 navLink">
            <i className="fa fa-home"></i> <small>Home</small>
          </button>
        </li>
        <li>
          <button className="nav-link py-3 navLink">
            <i className="fa fa-dashboard"></i> <small>Dashboard</small>
          </button>
        </li>
        <li>
          <button className="nav-link py-3 navLink">
            <i className="fa fa-first-order"></i> <small>My Orders</small>
          </button>
        </li>
        <li>
          <button className="nav-link py-3  navLink">
            <i className="fa fa-cog"></i> <small>Settings</small>
          </button>
        </li>
        <li>
          <button className="nav-link py-3  navLink">
            <i className="fa fa-bookmark"></i> <small>Bookmark</small>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;
