import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{position: "sticky", top: 0, zIndex: 99}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#" style={{width: "70px"}}>
            <img
              src={require("../../flash.png")}
              alt=""
              height="30"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="txt-decoration-none">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                </Link>
                
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Speaker
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tv
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Smart Phone
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Refrigerator
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Watch
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="txt-decoration-none">
                <a className="nav-link active" href="#">
                  Contact
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="txt-decoration-none" to={"/about"}>
                <a className="nav-link active" href="#">
                About
                </a>
                </Link>
              </li>
              
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/Login"} className="txt-decoration-none">
                  <a className="nav-link active" href="#">
                    Admin
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
