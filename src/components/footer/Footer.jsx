import "./Footer.css";
import { BsPinterest, BsYoutube } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container container">
        <div className="footer__first-section">
          <ul>
            <li>About Us</li>
            <li>News & Media</li>
            <li>Substainability</li>
          </ul>

          <ul>
            <li>Careers</li>
            <li>Global Research</li>
            <li>Latest Financial Result</li>
            <li>Our Global Website</li>
            <li>World Wide Locations</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h2>MONIE POINT</h2>
            </li>
            <li>Important Information</li>
            <li>Knowledge Centre</li>
            <li>Security Tips</li>
            <li>Sitemap</li>
            <li>Terms & Conditions</li>
            <li>Website Privacy Statement</li>
          </ul>
        </div>
      </div>

      <div className="footer__account">
        <p>Follow us: </p>
        <span>
          <AiFillFacebook />
        </span>
        <span>
          <AiFillLinkedin />
        </span>
        <span>
          <AiFillInstagram />
        </span>
        <span>
          <BsPinterest />
        </span>
        <span>
          <BsYoutube />
        </span>
        <span>
          <AiFillTwitterSquare />
        </span>
      </div>
    </div>
  );
}

export default Footer;
