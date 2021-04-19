import { Link } from "react-router-dom";

import "./homepage.scss";
import bg from "./uber.png";
import Header from "../Header";
import Footer from "../Footer";

const Homepage = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="home">
        <img src={bg} />
        <section>
          <div>
            <div className="content">
              <h2>Your ride on demand</h2>
              <p>
                Whether you're headed to work, the airport, or out of the town.
                Uber connects you with a reliable ride in minutes. One tap and a
                car come directly to you.
              </p>
            </div>
            <Link to="/form">
              <button className="btn">
                Register with Phone <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
