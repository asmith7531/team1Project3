import React from "react";

export default function Card() {
  return (
    <div class="row container">
      <h4 className="white-text">Saved Careers</h4>

      <div class="left col s12 m4 l4">
        <div class="card">
          <div class="card-content ">
            <h6 className="amber-text">Graphic Designer</h6>
            <hr />
            <p className="flow-text black-text">
              A graphic designer is a professional within the graphic design and
              graphic arts industry who assembles together images, typography,
              or motion graphics to create a piece of design. A graphic designer
              creates the graphics primarily for published, printed or
              electronic media, such as brochures (sometimes) and advertising.
            </p>
          </div>
        </div>
      </div>
      <div class="left col s12 m4">
        <div class="card">
          <div class="card-content ">
            <h6 className="amber-text">Horse Heart Surgeon</h6>
            <hr />
            <p className="flow-text black-text">Saving horse lives damn it.</p>
          </div>
        </div>
      </div>
      <div class="left col s12 m4">
        <div class="card">
          <div class="card-content ">
            <h6 className="amber-text">Professional Penguin Wrangler</h6>
            <hr />
            <p className="flow-text black-text">
              Take care of the little birds in tuxedos. You are the last line of
              defense against the lion seals... Goodluck.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
