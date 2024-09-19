import React from "react";
import DotmaticsELN from "./DotmaticsEln";
import LabArchives from "./LabArchives";
import GeneCDMS from "./GeneCDMS";
import GeneCIS from "./GeneCIS";
import GeneATS from "./GeneATS";
import GeneBIS from "./GeneBIS";
import "./ELN_LIMS.css";

export default function ELN_LIMS() {
  return (
    <div className="genomics-main"  id="elnlims-main">
      <div className="products-contents">
        <div className="card-container">
          <DotmaticsELN />
        </div>
        <div className="card-container">
          <LabArchives />
        </div>
        <div className="card-container">
          <GeneCDMS />
        </div>
        <div className="card-container">
          <GeneCIS />
        </div>
        <div className="card-container">
          <GeneATS />
        </div>
        <div className="card-container">
          <GeneBIS />
        </div>
      </div>
    </div>
  );
}
