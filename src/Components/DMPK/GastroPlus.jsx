import React, { useState } from "react";
import "./DMPK.css";
import { Dialog } from "@mui/material";
import GastroplusImg from "../../assets/gastroplus-img.jpg"
import YtIcon from "../../assets/yt.svg";

export default function GastroPlus() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Gastroplus_Flyer.pdf";
    link.download = "Gastroplus_Flyer.pdf";
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
      <img src={GastroplusImg} style={{width: "100%",height: "100%",borderRadius: "10px"}}/>
        <div className="title-subtitle">
          <div className="title-name">GastroPlus</div>
          <div className="subtitle-name">
            Formulation optimization and dosage prediction
          </div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GastroPlus predicts drug behavior within the gastrointestinal tract,
          aiding in formulation optimization and dosage prediction
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
            src="https://www.youtube.com/embed/rHszkTC-uYo?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Dialog>
      </div>
    </div>
  );
}
