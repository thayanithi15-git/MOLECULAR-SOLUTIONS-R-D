import React, { useState, useRef, useEffect } from "react";
import "./ComputationalChemistry.css";
import { Dialog } from "@mui/material";
import AdmetpredictorImg from "../../assets/admetpredictor-img.jpg";
import YtIcon from "../../assets/yt.svg";

export default function AdmetPredictor() {
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
    fetch("https://molecularsolutions.co.in/products/ADMET_Predictor_Flyer.pdf")
      .then(response => response.blob()) // Convert response to a blob
      .then(blob => {
        const url = window.URL.createObjectURL(blob); // Create a URL for the blob
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "ADMET_Predictor_Flyer.pdf"); // Set the download attribute
        document.body.appendChild(link);
        link.click(); // Simulate click to trigger download
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // Clean up
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
                   src="https://molecularsolutions.co.in/products/assets/admetpredictor-img-DTHVXktW.jpg"

          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">ADMET Predictor</div>
      <div className="subtitle-name">
        Machine learning platform for ADMET modeling
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          ADMET Predictor® is the flagship machine learning platform for ADMET
          modeling with extended capabilities for data analysis, metabolism
          prediction, and AI-driven drug design. <br />
          It accurately predicts over 175 properties including solubility, logP,
          pKa, sites of CYP metabolism, and Ames mutagenicity. The ADMET
          Predictor rapidly and easily create high-quality QSAR/QSPR models
          based on your own data. <br/><br/>The newest module offers advanced data mining,
          clustering, and matched molecular pair analysis. The program has an
          intuitive user interface that allows one to easily manipulate and
          visualize data.
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
          <a className="refined-animated-button">
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
              src="https://www.youtube.com/embed/AoZ6j5sWCFk?origin=https://yourdomain.com"
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
