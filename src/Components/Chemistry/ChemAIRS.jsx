import React, { useState } from "react";
import "./Chemistry.css";
import { Dialog } from "@mui/material";
import ChemAIRSImg from "../../assets/chemairs-img.jpg"
import YtIcon from "../../assets/yt.svg";

export default function ChemAIRS() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/ChemAIRS-Bronchure.pdf";
    link.download = "ChemAIRS.pdf";
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
      <img src={ChemAIRSImg} style={{width: "100%",height: "100%",borderRadius: "10px"}}/>
        <div className="title-subtitle">
        
          <div className="title-name">ChemAIRS </div>
          <div className="subtitle-name">
            Most advanced AI/ML/ Knowledge & Data driven retrosynthetic software
          </div>
        </div>
      </div>
      <div className="card-subdatas">
        <div className="brief-contents">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SARvision | Biologics is a desktop application designed to transform
          biologics informatics. With its intuitive smart interface, it enables
          users to read, organize, and analyze data on peptides, proteins,
          nucleic acids, chemically modified residues, and unnatural amino
          acids. The software has advanced visualization tools like mutation
          cliffs, sequence maps, graphs and efficient sequence alignments for
          large datasets. Actively filter data based on chemotype, scaffold,
          data range and properties. Users can seamlessly export their analysis
          to Excel and leverage advanced search capabilities for efficient data
          retrieval. SARvision | Biologics enhances research workflow by
          providing deeper insights and streamlining data management for more
          impactful discoveries
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
            src="https://www.youtube.com/embed/diU-ppGqnqI?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Dialog>
      </div>
    </div>
  );
}
