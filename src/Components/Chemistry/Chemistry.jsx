import React from "react";
import ChemAIRS from "./ChemAIRS";
import Medchem_Designer from "./MedchemDesigner";
import SarVision_SM from "./SARVision-SM";
import Vortex from "./Vortex";
import "./Chemistry.css";

export default function ChemistryMain() {
  return (
    <div className="genomics-main"  id="chemistry-main">
      <div className="products-contents">
      <div className="card-container">
        <ChemAIRS />
      </div>
      <div className="card-container">
        <Medchem_Designer />
      </div>
      <div className="card-container">
        <SarVision_SM />
      </div>
      <div className="card-container">
        <Vortex />
      </div>
    </div>
    </div>
  );
}
