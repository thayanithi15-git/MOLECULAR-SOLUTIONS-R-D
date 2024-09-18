import React, { useState } from "react";
import "./ComputationalChemistry.css";
import { Dialog } from "@mui/material";
import YtIcon from "../../assets/yt.svg";

export default function AdmetPredictor() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/ADMET_Predictor_Flyer.pdf";
    link.download = "ADMET_Predictor_Flyer.pdf";
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
          <div className="title-name">ADMET Predictor</div>
          <div className="subtitle-name">
            Machine learning platform for ADMET modeling
          </div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
          ADMET Predictor is a machine learning platform for ADMET modeling,
          offering enhanced features for data analysis, metabolism prediction,
          and AI-powered drug design.
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="bronchure-yt" onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt">
            <img src={YtIcon} style={{ width: "2.5vw" }} />
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
            src="https://www.youtube.com/embed/AoZ6j5sWCFk?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Dialog>
      </div>
    </div>
  );
}
