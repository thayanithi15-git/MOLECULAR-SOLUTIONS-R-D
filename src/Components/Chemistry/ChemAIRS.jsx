import React, { useState, useRef, useEffect } from "react";
import "./Chemistry.css";
import { Dialog } from "@mui/material";
import ChemAIRSImg from "../../assets/chemairs-img.jpg";
import YtIcon from "../../assets/yt.svg";
import Brochure from "../Home/Brochure";

export default function ChemAIRS() {
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);
  useEffect(() => {
    const element = textRef.current;
    if (element.scrollHeight > element.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);


  const downloadPDF = () => {
    fetch("https://molecularsolutions.co.in/products/ChemAIRS-Bronchure.pdf")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob); 
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "ChemAIRS-Bronchure.pdf"); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(err => console.error("Error downloading PDF:", err));
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
        <img
          src="https://molecularsolutions.co.in/products/assets/chemairs-img-CkIuZdXG.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">ChemAIRS </div>
      <div className="subtitle-name">
        Most advanced AI/ML/ Knowledge & Data driven retrosynthetic software
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          ChemAIRS is a retrosynthetic analysis tool that enhances chemical
          synthesis using advanced deep learning algorithms and extensive data
          mining. <br/><br />It assesses reaction feasibility, functional group
          compatibility, and chiral synthesis strategies to generate practical
          synthetic routes. The tool provides literature precedents for these
          pathways, enhancing reliability. <br/><br/>Unique features include automatic
          generation of multiple synthetic routes, consideration of chiral
          synthesis for enantiomerically pure compounds, and integration with
          documented reactions for verification. <br/><br/>ChemAIRS accelerates the
          discovery and development of new chemical entities, benefiting
          chemical and pharmaceutical sciences with its comprehensive analysis
          capabilities and user-friendly interface. <br/><br/>This tool is pivotal for
          chemists and researchers in optimizing synthetic routes efficiently.
        </div>
        <div>
          {isOverflowing && (
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="view-button">
              {isExpanded ? "" : "View More"}
            </div>
          )}
        </div>
      </div>

      <div className="bottom-buttons">
      <div className="button-containers" onClick={downloadPDF}>
          <a  className="refined-animated-button">
            <div style={{ fontSize: "13px" }}>BROCHURE</div>
            <i class="fa-solid fa-cloud-arrow-down"></i>
            <div className="wave-animation"></div>
          </a>
        </div>
        <div className="bronchure-t" onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt" style={{ display: "flex" }}>
            <img src={YtIcon} className="yt-img" />
            <p className="presentation">Video Presentation</p>
          </div>
        </div>
        
      </div>

      <Dialog
        className="yt-dialog"
        open={openVideoDialog}
        onClose={() => setOpenVideoDialog(false)}
        fullScreen>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/diU-ppGqnqI?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </Dialog>
    </div>
  );
}
