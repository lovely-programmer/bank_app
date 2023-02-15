import "./Header.css";
import Image from "../../assets/image.jpeg";

function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__section">
          <img src={Image} alt="" />

          <div className="header__section-content">
            <div className="header__section-first__content">
              <div className="header__content">
                {/* <h3>Good Day</h3> */}
                <h3>Sign in to manage your accounts.</h3>
              </div>
              <form>
                <div className="form__group">
                  <input type="text" placeholder="Username" />
                </div>
                <div className="form__group">
                  <input type="password" placeholder="Password" />
                </div>
                <div className="form__group">
                  <button>Sign In</button>
                </div>
              </form>
              <p>Forget username or password?</p>
            </div>

            <div className="header__section--second__content">
              <h1>Simplify your life</h1>
              <p>Your money's at hand with Everyday Checking</p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
