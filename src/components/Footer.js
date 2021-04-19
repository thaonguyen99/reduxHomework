import "../App.css";

const Footer = (props) => {
  return (
    <footer>
      <hr />
      <div className="container">
        <div className="copyright">
          <p>&copy; 2019 Uber Technologies Inc. All rights reserved.</p>
          <br />
          <p>
            Terms of Use <span>|</span> Legal Notices <span>|</span> Privacy
            &amp; Security
          </p>
        </div>
        <div class="social">
          <i
            style={{ color: "rgb(48, 48, 197)" }}
            className="fab fa-facebook-square"
          ></i>
          <i
            style={{ color: "rgb(99, 127, 179)" }}
            className="fab fa-linkedin"
          ></i>
          <i
            style={{ color: "rgb(197, 24, 24)" }}
            className="fab fa-youtube-square"
          ></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
