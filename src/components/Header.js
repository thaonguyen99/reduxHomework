import "../App.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav>
      <div className="left">
        <div className="logo">
          <img src="logo.jpg" alt="logo" />
        </div>
        <Link
          to="/register"
          style={{ textDecoration: "none" }}
          className="home"
        >
          Uber bd
        </Link>
      </div>
      <i className="fas fa-bars"></i>
    </nav>
  );
};

export default Header;
