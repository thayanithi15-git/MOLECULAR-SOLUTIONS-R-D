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
        <img
          src={ChemAIRSImg}
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
          mining. It assesses reaction feasibility, functional group
          compatibility, and chiral synthesis strategies to generate practical
          synthetic routes. The tool provides literature precedents for these
          pathways, enhancing reliability. Unique features include automatic
          generation of multiple synthetic routes, consideration of chiral
          synthesis for enantiomerically pure compounds, and integration with
          documented reactions for verification. ChemAIRS accelerates the
          discovery and development of new chemical entities, benefiting
          chemical and pharmaceutical sciences with its comprehensive analysis
          capabilities and user-friendly interface. This tool is pivotal for
          chemists and researchers in optimizing synthetic routes efficiently.
        </div>
        <div style={{ height: "2vh" }}>
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
        <div className="bronchure-y" onClick={handleClickOpenVideoDialog}>
          <div className="icon-container-yt">
            <img src={YtIcon} className="yt-img" />
          </div>
        </div>
        <div
          className="button-container"
          style={{ marginLeft: "3%" }}
          onClick={downloadPDF}>
          <a href="/brochure.pdf" download className="refined-animated-button">
            <div style={{ fontSize: "13px" }}>Brochure</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              id="download-icon">
              <path d="M12 16l-4-4h3V4h2v8h3l-4 4zm0 2c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7z" />
            </svg>
            <div className="wave-animation"></div>
          </a>
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
