import "./Support.css";
import Save from "../../assets/save.jpeg";
import Build from "../../assets/build.jpeg";
import Peace from "../../assets/peace.jpeg";

function Support() {
  return (
    <div className="support">
      <h1>Financial guidance and support</h1>
      <div className="support__container container">
        <div className="support__card">
          <div className="support__card-head">
            <img src={Save} alt="" />
          </div>
          <div className="support__card-base">
            <h2>Spend less. Save more. Relax more.</h2>
            <p>These four steps could help you make it happen</p>
          </div>
        </div>
        <div className="support__card">
          <div className="support__card-head">
            <img src={Build} alt="" />
          </div>
          <div className="support__card-base">
            <h2>Spend less. Save more. Relax more.</h2>
            <p>These four steps could help you make it happen</p>
          </div>
        </div>
        <div className="support__card">
          <div className="support__card-head">
            <img src={Peace} alt="" />
          </div>
          <div className="support__card-base">
            <h2>Spend less. Save more. Relax more.</h2>
            <p>These four steps could help you make it happen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
