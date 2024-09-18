import React, { useState } from "react";
import DotmaticsImg from "../../assets/dotmatics-img.jpg";
import "./ELN_LIMS.css";

export default function DotmaticsELN() {
  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
      <img src={DotmaticsImg} style={{width: "100%",height: "100%",borderRadius: "10px"}}/>
        <div className="title-subtitle">
          <div className="title-name">Dotmatics ELN</div>
          <div className="subtitle-name">
            Simplify Scientific Discovery with a Powerful Online ELN
          </div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dotmatics ELN enables seamless collaborative research by capturing and
          securely storing experimental data in a unified digital notebook. With
          flexible templates for chemistry, biologics, and materials science, it
          supports diverse scientific workflows. Its integrated system ensures
          smooth data flow between experiment registration, screening, and
          decision support, optimizing the innovation process.
        </div>
      </div>
    </div>
  );
}
