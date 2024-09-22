import React from "react";
import DDDplus from "./DDDplus";
import DILIsym from "./DILIsym";
import GastroPlus from "./GastroPlus";
import ILDsym from "./ILDsym";
import IPFsym from "./IPFsym";
import MembranePlus from "./MembranePlus";
import RENAsym from "./RENAsym";
import MonolixSuite from "./MonolixSuite";
import NAFLDsym from "./NAFLDsym";
import Obesitysym from "./Obesitysym";
import PKanalix from "./Pkanalix";
import Simulx from "./Simulix";
import "./DMPK.css";

export default function DMPK() {
  return (
    <div className="genomics-main" id="dmpk-main">
      <div className="products-contents-individual">
        <div className="card-container">
          <GastroPlus />
        </div>
        <div className="card-container">
          <MonolixSuite />
        </div>
        <div className="card-container">
          <DILIsym />
        </div>
        <div className="card-container">
          <DDDplus />
        </div>
        <div className="card-container">
          <NAFLDsym />
        </div>
        <div className="card-container">
          <MembranePlus />
        </div>
        <div className="card-container">
          <Obesitysym />
        </div>
        <div className="card-container">
          <PKanalix />
        </div>
        <div className="card-container">
          <Simulx />
        </div>
        <div className="card-container">
          <IPFsym />
        </div>
        <div className="card-container">
          <ILDsym />
        </div>
        <div className="card-container">
          <RENAsym />
        </div>
      </div>
    </div>
  );
}
