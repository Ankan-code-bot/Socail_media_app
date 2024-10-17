import { Link } from "react-router-dom";

const Sidebar = ({setNavbar, navbarval}) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "200px", height: "45rem"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="/post" className={`nav-link text-white ${navbarval === "Home" && 'active'}`} aria-current="page" onClick={() => (setNavbar("Home"))}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li>
        <Link to = "Crate_Post" className={`nav-link text-white ${navbarval === "Create Post" && 'active'}`} onClick={() => (setNavbar("Create Post"))}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </Link>
      </li>
      
    </ul>
  </div>
  );
}

export default Sidebar;