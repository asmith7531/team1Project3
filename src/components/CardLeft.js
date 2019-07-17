import React from "react";

export default function Card() {
  return (
    <div class="row">
    <div class="left col s12 m4">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <h2 class="card-title" >Your Top Career Match</h2>
          <hr></hr>
          <h4>Graphic Designer</h4>
          <p className="flow-text">A graphic designer is a professional within the graphic design and graphic arts industry who assembles together images, typography, or motion graphics 
            to create a piece of design. A graphic designer creates the graphics primarily for published, printed or electronic media, such as brochures (sometimes) 
            and advertising. They are also sometimes responsible for typesetting, illustration, user interfaces, and web design. A core responsibility of the designer's 
            job is to present information in a way that is both accessible and memorable.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
</div>
  );
}
