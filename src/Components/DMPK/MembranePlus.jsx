import React, { useState, useRef, useEffect } from "react";
import "./DMPK.css";
import { Dialog } from "@mui/material";
import MembranePlusImg from "../../assets/MembranePlus-img.jpg";
import YtIcon from "../../assets/yt.svg";

export default function MembranePlus() {
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
    fetch("https://molecularsolutions.co.in/products/MembranePlus-v3-Flyer.pdf")
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob); 
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "MembranePlus-v3-Flyer.pdf"); 
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
          src="https://molecularsolutions.co.in/products/assets/MembranePlus-img-BvxZ7BRD.jpg"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle"></div>
      </div>
      <div className="title-name">MembranePlus</div>
      <div className="subtitle-name">
        IVIVE of absorption and systemic clearance/distribution modeling tool
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          MembranePlus is a comprehensive permeability modeling platform
          designed to simulate in vitro permeability and hepatocyte
          concentrations, offering valuable insights into drug absorption and
          distribution. <br/><br/>It has been used for screening compound libraries,
          predicting permeability processes, and estimating intracellular
          concentrations (membrane, cytosol, lysosome). <br/><br/>The tool allows users to
          analyze in vitro data, calculate enzyme and transporter kinetics, and
          assess complex phenomena like lysosomal trapping and biliary
          excretion. <br/><br/>MembranePlus supports single simulations, parameter
          sensitivity analysis (PSA), and batch mode processing for large
          compound libraries. <br/><br/> MembranePlus aids in optimizing experimental designs
          and unlocking critical insights for early-stage drug development.
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
              src="https://www.youtube.com/embed/j5YJ8nh7uaA?origin=https://yourdomain.com"
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
