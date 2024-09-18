import React, { useState } from "react";
import "./ELN_LIMS.css";

export default function GeneBIS() {

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/GeneBIS.pdf";
    link.download = "GeneBIS.pdf";
    link.click();
  };

  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <div className="title-subtitle">
          <div className="title-name">GeneBIS</div>
          <div className="subtitle-name">
            Chemical and Biology material Inventory Management system
          </div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
          Gene BIS is an Inventory Management System for chemical and biologics
          materials that streamlines management with advanced features. It
          includes a barcode mechanism for labeling, printing, and storing
          materials in specified locations. The system automates expiry material
          report generation with weekly email notifications and displays stock
          availability by store location. Comprehensive MIS reports and
          dashboards provide insights into material receipt, requests, issues,
          zero inventory, and fast-moving materials, enhancing overall inventory
          optimization.
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
