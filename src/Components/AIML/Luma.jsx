import React, { useState } from "react";
import "./AIML.css";
import { Dialog } from "@mui/material";
import YtIcon from "../../assets/yt.svg";

export default function Luma() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Dotmatics LUMA.pdf";
    link.download = "Dotmatics LUMA.pdf";
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
          <div className="title-name">
                LUMA
              </div>
              <div
              className="subtitle-name">
              The AI-native Multimodal Scientific Intelligence Platform
            </div>
            </div>
            
          </div>
          <div className="card-subdatas">
        <div className="brief-contents">
            LUMA is a low-code laboratory informatics platform by Dotmatics that
            integrates with various scientific software to streamline data
            management and collaboration. It offers visualization and analysis
            tools, enabling scientists to efficiently organize and share data.
            LUMA enhances research productivity by tailoring to unique
            scientific needs.
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
