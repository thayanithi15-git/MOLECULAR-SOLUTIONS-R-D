import React, { useState } from "react";
import { Dialog, IconButton } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import Lottie from "../../Lotties/Animation - 1725598060160.json";
import Productgenomics from "../../assets/productgenomics4.svg";
import YtIcon from "../../assets/yt.svg";
import "./Chemistry.css";

export default function ChemistryMain({ handleChemAIRS, handleSarVisionSM, handleVortex, handleMedchemDesigner }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isHover, setisHover] = useState(false);
  const [openVideoDialog, setOpenVideoDialog] = useState(false);

  const products = [
    {
      image: Productgenomics,
      title: "ChemAIRS",
      content: "Most advanced AI/ML/ Knowledge & Data driven retrosynthetic software",
    },
    {
      image: Productgenomics,
      title: "SARvision|SM",
      content: "A Comprehensive Tool for Chemical Data Analysis",
    },
    {
      image: Productgenomics,
      title: "Vortex",
      content: "Intuitive Data Visualization & Analysis for Chemistry Decision Support",
    },
    {
      image: Productgenomics,
      title: "Medchem Designer",
      content: "Chemical Structure Drawing and Property Prediction tool",
    },
  ];

  const handleItemClick = (item, index) => {
    if (item.title === "ChemAIRS") {
      handleChemAIRS();
    } else if (item.title === "SARvision|SM") {
      handleSarVisionSM();
    } else if (item.title === "Vortex") {
      handleVortex();
    } else if (item.title === "Medchem Designer") {
      handleMedchemDesigner();
    }
  }

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className="genomics-main">
     
     <div className="card-container">
        <div className="title-productspage">
          <div className="title-subtitle">
          <div style={{ marginTop: "0%", marginLeft: "0%" }}>ChemAIRS </div>
          <div className="subtitle-productspage">
            Most advanced AI/ML/ Knowledge & Data driven retrosynthetic software
          </div>
          </div>
        </div>
        <div style={{ color: "#667085", fontSize: "14px", marginTop: "2%" }}>
          
          <div className="brief-contents">
            SARvision | Biologics is a desktop application designed to transform
            biologics informatics. With its intuitive smart interface, it
            enables users to read, organize, and analyze data on peptides,
            proteins, nucleic acids, chemically modified residues, and unnatural
            amino acids. The software has advanced visualization tools like
            mutation cliffs, sequence maps, graphs and efficient sequence
            alignments for large datasets. Actively filter data based on
            chemotype, scaffold, data range and properties. Users can seamlessly
            export their analysis to Excel and leverage advanced search
            capabilities for efficient data retrieval. SARvision | Biologics
            enhances research workflow by providing deeper insights and
            streamlining data management for more impactful discoveries
          </div>
        </div>

<div style={{display: "flex",flexDirection: "row"}}>
<button
          className="bronchure-yt"
          onClick={handleClickOpenVideoDialog}
        >
          <div style={{ fontSize: "14px", padding: "0% 6% 0% 15%" }}>
            Presentation
          </div>
          <div className="icon-container-yt">
            {/* <i className="fa-solid fa-play" id="play-icon"></i> */}
            <img src={YtIcon}/>
          </div>
        </button>
        <button
          className="bronchure"
          onMouseEnter={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
          onClick={downloadPDF}
        >
          <div style={{ fontSize: "14px", padding: "2% 2% 3% 25%" }}>
            Brochure
          </div>
          <div className="icon-container">
            {!isHover && (
              <i className="fa-solid fa-arrow-right" id="start-icons"></i>
            )}
            {isHover && (
              <i
                className="fa-solid fa-download"
                id="start-icons"
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  opacity: isHover ? 1 : 0,
                  transform: isHover ? "rotate(360deg)" : "rotate(0deg)",
                }}></i>
            )}
          </div>
        </button>

        

        <Dialog
          open={openVideoDialog}
          onClose={()=>setOpenVideoDialog(false)}
          fullScreen
          PaperProps={{
            style: {
              margin: "16.2%",
              height: "80vh",
              // width: "300vw",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/diU-ppGqnqI?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* <IconButton
            style={{ position: "absolute", top: -5, right: 0, color: "white" }}
            onClick={handleCloseVideoDialog}
          >
            <i className="fa-solid fa-times"></i>
          </IconButton> */}
        </Dialog>
        </div>
      </div>
    </div>
  );
}
