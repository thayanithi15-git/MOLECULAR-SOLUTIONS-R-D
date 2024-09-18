import React, { useState } from "react";
import "./Chemistry.css";
import { Dialog } from "@mui/material";
import YtIcon from "../../assets/yt.svg";

export default function SarVision_SM() {
  const [isHover, setisHover] = useState(false);
  const [openVideoDialog, setOpenVideoDialog] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/SARVision Chemistry Flyer.pdf";
    link.download = "SARVision Chemistry Flyer.pdf";
    link.click();
  };

  const handleClickOpenVideoDialog = () => {
    setOpenVideoDialog(true);
  };

  const handleCloseVideoDialog = () => {
    setOpenVideoDialog(false);
  };


  return (
    <div className="right-sub-contents">
      <div className="title-productspage">
        <div className="title-subtitle">
          <div className="title-name">SARvision|SM </div>
          <div className="subtitle-name">
            A Comprehensive Tool for Chemical Data Analysis
          </div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
          SAR vision|SM is a desktop application that allows users to
          intuitively navigate chemical information and identify
          structure-property relationships. It provides a structured environment
          to identify dataset-specific scaffolds and chemotypes without using a
          proprietary algorithm for fast substructure identification. The
          application combines rapid substructure enumeration with knowledge-
          based rules, facilitating dataset navigation and highlighting
          important chemical substructures. Enhance your chemical data analysis
          with SAR vision advanced tools and user-friendly interface.
        </div>
      </div>

     <div style={{ display: "flex", alignItems: "center" }}>
        <div className="bronchure-yt" onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt">
            <img src={YtIcon} style={{ width: "2.5vw"}} />
          </div>
        </div>
        <button
          className="bronchure"
          onMouseEnter={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
          onClick={downloadPDF}>
          <div style={{ fontSize: "14px", padding: "2% 2% 3% 25%" }}>
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

        <Dialog
          open={openVideoDialog}
          onClose={() => setOpenVideoDialog(false)}
          fullScreen
          PaperProps={{
            style: {
              margin: "16.2%",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1Gi4Ruse2QQ?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Dialog>
      </div>
    </div>
  );
}
