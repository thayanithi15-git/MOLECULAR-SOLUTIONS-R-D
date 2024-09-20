import React, { useState, useRef, useEffect } from "react";
import "./DMPK.css";
import { Dialog } from "@mui/material";
import NAFLDsymImg from "../../assets/NAFLDsym-img.jpg";
import YtIcon from "../../assets/yt.svg";

export default function NAFLDsym() {
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
    link.href = "/NAFLDsym.pdf";
    link.download = "NAFLDsym.pdf";
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
          src={NAFLDsymImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">NAFLDsym</div>
      <div className="subtitle-name">
        Nonalcoholic fatty liver disease modeling tool
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          The NAFLDsym modeling software is a mechanistic, mathematical model of
          nonalcoholic fatty liver disease (NAFLD), designed to predict the
          efficacy of treatment strategies for both NAFLD and nonalcoholic
          steatohepatitis (NASH). <br/><br/>It has been used by several large
          pharmaceutical companies to assess various compounds, helping to
          optimize clinical trial designs and support decisions in clinical
          development.<br/><br/> NAFLDsym utilizes QSP (quantitative systems pharmacology)
          modeling techniques by integrating predictions of compound exposure
          with the pharmacodynamic properties of a drug, evaluating these
          factors which drive efficacy across a diverse population with varying
          pathophysiologic profiles.
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
      <div className="button-containers" onClick={downloadPDF}>
          <a href="/brochure.pdf" download className="refined-animated-button">
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

        <Dialog
          className="yt-dialog"
          open={openVideoDialog}
          onClose={() => setOpenVideoDialog(false)}
          fullScreen>
          <div className="youtube-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qgstoi0Slfg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
