import React from "react";
import Commander from "./Commander";
import Mara from "../AIML/Mara";
import Luma from "../AIML/Luma";
import AdmetPredictor from "../ComputationalChemistry/AdmetPredictor";
import ChemAIRS from "../Chemistry/ChemAIRS";
import SarVision_Biologics from "../Biology/SARVision-Biologics";
import Medchem_Designer from "../Chemistry/MedchemDesigner";
import SarVision_SM from "../Chemistry/SARVision-SM";
import Vortex from "../Chemistry/Vortex";
import GastroPlus from "../DMPK/GastroPlus";
import MonolixSuite from "../DMPK/MonolixSuite";
import DILIsym from "../DMPK/DILIsym";
import DDDplus from "../DMPK/DDDplus";
import NAFLDsym from "../DMPK/NAFLDsym";
import MembranePlus from "../DMPK/MembranePlus";
import Obesitysym from "../DMPK/Obesitysym";
import PKanalix from "../DMPK/Pkanalix";
import Simulx from "../DMPK/Simulix";
import IPFsym from "../DMPK/IPFsym";
import ILDsym from "../DMPK/ILDsym";
import RENAsym from "../DMPK/RENAsym";
import DotmaticsELN from "../ELN & LIMS/DotmaticsEln";
import LabArchives from "../ELN & LIMS/LabArchives";
import GeneCDMS from "../ELN & LIMS/GeneCDMS";
import GeneCIS from "../ELN & LIMS/GeneCIS";
import GeneATS from "../ELN & LIMS/GeneATS";
import GeneBIS from "../ELN & LIMS/GeneBIS";
import Nanome from "../VirtualReality/Nanome";
import "./Genomics.css";

export default function GenomicsMain() {
  return (
    <div className="genomics-main" id="genomics-main">
      <div className="main-cards">
        <h1 className="product-head-title">AI/ML</h1>
        <div className="products-contents">
          <div className="card-container">
            <AdmetPredictor />
          </div>
          <div className="card-container">
            <ChemAIRS />
          </div>
          <div className="card-container">
            <Luma />
          </div>
          <div className="card-container">
            <Mara />
          </div>
        </div>
        <br />
        <hr style={{ border: "none" }} />
        <h1 className="product-head-title">BIOLOGY R&D</h1>
        <div className="products-contents">
          <div className="card-container">
            <SarVision_Biologics />
          </div>
          <div className="card-container">
            <Commander />
          </div>
          </div>
        <br />
        <hr style={{ border: "none" }} />
        <h1 className="product-head-title">CHEMISTRY R&D</h1>
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
        <br />
        <hr style={{ border: "none" }} />
        <h1 className="product-head-title">COMPUTATIONAL CHEMISTRY</h1>
        <div className="products-contents">
        <div className="card-container">
          <AdmetPredictor />
        </div>
      </div>
        <br />
        <hr style={{ border: "none" }} />
        <h1 className="product-head-title">DMPK</h1>
        <div className="products-contents">
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
        <br />
        <hr style={{ border: "none" }} />
        <h1 className="product-head-title">ELN & LIMS</h1>
        <div className="products-contents">
        <div className="card-container">
          <DotmaticsELN />
        </div>
        {/* <div className="card-container">
          <LabArchives />
        </div> */}
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
        <br />
        <hr style={{ border: "none" }} />
        <h1 className="product-head-title">VIRTUAL REALITY</h1>
        <div className="products-contents">
        <div className="card-container">
          <Nanome />
        </div>
      </div>
      </div>
    </div>
  );
}
