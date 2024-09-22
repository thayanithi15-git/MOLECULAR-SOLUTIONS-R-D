import React from "react";
import SarVision_Biologics from "./SARVision-Biologics";
import Commander from "../Genomics/Commander";
import "./Biology.css";

export default function BiologyMain() {
  return (
    <div className="genomics-main"  id="biology-main">
     <div className="products-contents-individual">
          <div className="card-container">
            <SarVision_Biologics />
          </div>
          <div className="card-container">
          <Commander />
        </div>
      </div>
    </div>
  );
}
