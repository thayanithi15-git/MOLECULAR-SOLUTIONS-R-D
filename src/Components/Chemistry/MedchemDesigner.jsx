import React, { useState } from "react";
import MedchemImg from "../../assets/medchem-img.jpg"
import "./Chemistry.css";

export default function Medchem_Designer() {

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Medchem_Designer_Flyer.pdf";
    link.download = "Medchem_Designer_Flyer.pdf";
    link.click();
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
      <img src={MedchemImg} style={{width: "100%",height: "100%",borderRadius: "10px"}}/>
        <div className="title-subtitle">
          <div className="title-name">Medchem Designer</div>
          <div className="subtitle-name">
            Chemical Structure Drawing and Property Prediction tool
          </div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MedChem Designer is a chemical sketching tool that integrates advanced
          molecule drawing capabilities with quick and accurate ADMET property
          predictions from our top-rated ADMET Predictor software. These
          predictions include logP, logD(7.4), Polar Surface Area, and
          Lipinski's Rule of 5 calculations.
        </div>
      </div>
      <button
        className="bronchurewithoutyt"
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        onClick={downloadPDF}>
        <div style={{ fontSize: "14px", padding: "2% 2% 3% 15%" }}>
          Brochure
        </div>
        <div className="icon-container">
        <i
              className="fa-solid fa-download"
               id="start-icons"
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}></i>
        </div>
      </button>
     
    </div>
  );
}
