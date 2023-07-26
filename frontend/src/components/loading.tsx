import React from "react";
import "../css/loading.css";
function Loading() {
  return (
    <React.Fragment>
      <div className="about">
        <a
          className="bg_links social portfolio"
          href="https://www.rafaelalucas.com"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social dribbble"
          href="https://dribbble.com/rafaelalucas"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
        >
          <span className="icon"></span>
        </a>
        <a className="bg_links logo"></a>
      </div>

      <div className="content">
        <div className="loading">
          <p>loading</p>
          <span></span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Loading;