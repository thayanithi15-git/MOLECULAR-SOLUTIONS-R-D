import React from "react";
import AdmetPredictor from "./AdmetPredictor";
import "./ComputationalChemistry.css";

export default function ComputationalChemistry() {
  return (
    <div className="genomics-main" id="comchemistry-main" >
      <div className="products-contents">
        <div className="card-container">
          <AdmetPredictor />
        </div>
      </div>
    </div>
  );
}
