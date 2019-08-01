import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">ZigZag</h5>
              <p className="grey-text text-lighten-4">Find your way.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text"> Helpful Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="https://github.com/asmith7531/team1project3">
                    Our Github 
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="https://collegescorecard.ed.gov/">
                    Api
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2019 Copyright </div>
        </div>
      </footer>
    </div>
  );
}
