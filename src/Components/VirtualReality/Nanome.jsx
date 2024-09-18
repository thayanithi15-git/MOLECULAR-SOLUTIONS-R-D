import React, { useState } from "react";
import "./VirtualReality.css";
import { Dialog } from "@mui/material";
import NanomeImg from "../../assets/nanome-img.jpg"
import YtIcon from "../../assets/yt.svg";


export default function Nanome() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Nanome_Flyer.pdf";
    link.download = "Nanome_Flyer.pdf";
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
      <img src={NanomeImg} style={{width: "100%",height: "100%",borderRadius: "10px"}}/>
        <div className="title-subtitle">
          <div className="title-name">
                Nanome
              </div>
              <div
              className="subtitle-name">
              CMolecular Design and Mixed Virtual Reality tool
            </div>
            </div>
           
          </div>
          <div className="card-subdatas">
        <div className="brief-contents">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nanome is a mixed virtual reality software that revolutionizes the
            way scientists, researchers, and educators interact with molecular
            structures on an atomic level. It offers a 3D immersive environment
            where users can visualize and interact with molecular formations
            intuitively. Designed for collaboration, Nanome integrates
            seamlessly with other software and databases, allowing global teams
            to work together in real time. This platform accelerates discovery
            and development by making molecular design more accessible and
            interactive.
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
            src="https://www.youtube.com/embed/p8yt_7he3mU?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Dialog>
          </div>
        </div>
  );
}
