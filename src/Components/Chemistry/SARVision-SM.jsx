import React, { useState, useRef, useEffect } from "react";
import "./Chemistry.css";
import { Dialog } from "@mui/material";
import SarVisionImg from "../../assets/sarvision-img.png";
import YtIcon from "../../assets/yt.svg";

export default function SarVision_SM() {
  const [isHover, setisHover] = useState(false);
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
    link.href = "/SARVision Chemistry Flyer.pdf";
    link.download = "SARVision Chemistry Flyer.pdf";
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
          src={SarVisionImg}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
        <div className="title-subtitle">
          <div className="title-name">SARvision|SM </div>
        </div>
      </div>
      <div className="subtitle-name">
        A Comprehensive Tool for Chemical Data Analysis
      </div>
      <div className="card-subdatas">
        <div
          className={`brief-contents ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}>
          &nbsp;&nbsp;SAR vision|SM is a desktop
          application that allows users to intuitively navigate chemical
          information and identify structure-property relationships. It provides
          a structured environment to identify dataset-specific scaffolds and
          chemotypes without using a proprietary algorithm for fast substructure
          identification. The application combines rapid substructure
          enumeration with knowledge- based rules, facilitating dataset
          navigation and highlighting important chemical substructures. Enhance
          your chemical data analysis with SAR vision advanced tools and
          user-friendly interface.
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
            src="https://www.youtube.com/embed/1Gi4Ruse2QQ?origin=https://yourdomain.com"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Dialog>
      </div>
    </div>
  );
}
