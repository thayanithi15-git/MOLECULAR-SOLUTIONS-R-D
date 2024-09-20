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
    const link = document.createElement("a");
    link.href = "/MembranePlus-v3-Flyer.pdf";
    link.download = "MembranePlus-v3-Flyer.pdf";
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
          src={MembranePlusImg}
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
          Membrane Plus is a comprehensive permeability modeling platform
          designed to simulate in vitro permeability and hepatocyte
          concentrations, offering valuable insights into drug absorption and
          distribution. It has been used for screening compound libraries,
          predicting permeability processes, and estimating intracellular
          concentrations (membrane, cytosol, lysosome). The tool allows users to
          analyze in vitro data, calculate enzyme and transporter kinetics, and
          assess complex phenomena like lysosomal trapping and biliary
          excretion. Membrane Plus supports single simulations, parameter
          sensitivity analysis (PSA), and batch mode processing for large
          compound libraries. It helps prioritize compounds for testing and
          streamline resource allocation. By integrating predicted or measured
          drug properties, MembranePlus aids in optimizing experimental designs
          and unlocking critical insights for early-stage drug development.
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
        <div className="bronchure-t" onClick={handleClickOpenVideoDialog}>
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
