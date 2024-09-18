import React, { useState } from "react";
import GeneCDMSImg from "../../assets/geneCDMS-img.jpg";
import "./ELN_LIMS.css";

export default function GeneCDMS() {

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/GeneCDMS.pdf";
    link.download = "GeneCDMS.pdf";
    link.click();
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
      <img src={GeneCDMSImg} style={{width: "100%",height: "100%",borderRadius: "10px"}}/>
        <div className="title-subtitle">
          <div className="title-name">
                GeneCDMS
              </div>
              <div
             className="subtitle-name">
              Compound & Data Management System
            </div>
            </div>
          </div>
          <div className="card-subdatas">
        <div className="brief-contents">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GeneCDMS, a Compound & Data Management System (CDMS), is tailored to
            manage compound registration and store structural and chemical
            information in the database. Compounds undergo validation, QC, and
            normalization steps prior to registration, with resulting reports
            exportable to an Excel sheet.
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
