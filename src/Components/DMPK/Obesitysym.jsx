import React, { useState, useRef, useEffect } from "react";
import "./DMPK.css";
import { Dialog } from "@mui/material";
import ObesitysymImg from "../../assets/Obesitysym-img.jpg";
import YtIcon from "../../assets/yt.svg";

export default function Obesitysym() {
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
    link.href = "/OBESITYsym-Flyer.pdf";
    link.download = "OBESITYsym-Flyer.pdf";
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
          src={ObesitysymImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
         
        </div>
      </div>
      <div className="title-name">Obesitysym</div>
      <div className="subtitle-name">Obesity QSP model</div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
         OBESITYsym allows researchers and
          healthcare professionals to simulate the impact of obesity on drug
          metabolism, disease progression, and therapeutic interventions. This
          powerful tool aids in the development of personalized treatment
          strategies and enhances understanding of obesity-related health
          challenges, facilitating more effective and targeted research and
          clinical outcomes.
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
          <div 
        className="youtube-video">
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
