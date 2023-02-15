import "./Navbar.css";
import { MdOutlineMenu } from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container container">
        <div className="navbar__container-first__section">
          <ul>
            <li className="active">
              <a href="">Personal</a>
            </li>
            <li>
              <a href="">Business</a>
            </li>
            <li>
              <a href="">Commercial</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="">Schedule a Meeting</a>
            </li>
            <li>
              <a href="">Customer Service</a>
            </li>
            <li>
              <a href="">Sign In</a>
            </li>
          </ul>
        </div>

        <div className="navbar__container-second__section">
          <h1>
            <a href="">MONIE POINT</a>
          </h1>

          <div className="menu">
            <MdOutlineMenu />
          </div>
        </div>

        <div className="navbar__container-third__section">
          <span>
            <a href="">Bank with Us</a>
          </span>
          <span>
            <a href="">Credit Cards</a>
          </span>
          <span>
            <a href="">Save</a>
          </span>
          <span>
            <a href="">Invest</a>
          </span>
          <span>
            <a href="">Insure</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
