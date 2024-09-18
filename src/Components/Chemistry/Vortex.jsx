import React, { useState } from "react";
import SarVisionImg from "../../assets/sarvision-img.png";
import "./Chemistry.css";

export default function Vortex() {
  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
      <img src={SarVisionImg} style={{width: "100%",height: "100%",borderRadius: "10px"}}/>
        <div className="title-subtitle">
          <div className="title-name">Vortex</div>
          <div className="subtitle-name">
            Intuitive Data Visualization & Analysis for Chemistry Decision
            Support
          </div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VORTEX is an advanced data analysis and visualization module designed
          for managing and interacting with massive datasets across various data
          types, including numeric, textual, image, and chemical structures. It
          includes specialized tools for cheminformatics analyses like R-group,
          enumeration, SAR, and matched molecular pairs, while supporting
          large-scale datasets of millions of compounds or genomic sequences
        </div>
      </div>
    </div>
  );
}
