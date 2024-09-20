import React from "react";
import Luma from "./Luma";
import Mara from "./Mara";
import AdmetPredictor from "../ComputationalChemistry/AdmetPredictor";
import ChemAIRS from "../Chemistry/ChemAIRS";
import "./AIML.css";

export default function AIML() {
  return (
    <div className="genomics-main" id="aiml-main">
      <div className="products-contents">
        <div className="card-container">
          <Mara />
        </div>
        <div className="card-container">
          <Luma />
        </div>
        <div className="card-container">
          <AdmetPredictor />
        </div>
        <div className="card-container">
          <ChemAIRS />
        </div>
        
      </div>
    </div>
  );
}
